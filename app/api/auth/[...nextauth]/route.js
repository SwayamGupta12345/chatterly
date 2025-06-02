import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@/lib/mongodb";

export const authOptions ={
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        const { db } = await connectToDatabase();
        const existingUser = await db.collection("users").findOne({ email: user.email });

        if (!existingUser) {
          await db.collection("users").insertOne({
            email: user.email,
            password: "",
            createdAt: new Date(),
            name: user.name || "",
            nickname: "",
            chats_arr: [],
            frnd_arr: [],
          });
        }

        return true;
      } catch (err) {
        console.error("Google signIn DB error:", err);
        return false;
      }
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user?.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signup",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
