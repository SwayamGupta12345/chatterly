// app/api/delete-ai-chat/route.js
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { chatId, convoId } = await req.json();
    if (!chatId || !convoId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
 
    const { db } = await connectToDatabase();

    const convo = await db.collection("conversations").findOne({ _id: new ObjectId(convoId) });
    if (convo?.messages?.length > 0) {
      const messageIds = convo.messages.flatMap((msg) => [msg.userMessageId, msg.aiResponseId]);
      await db.collection("messages").deleteMany({ _id: { $in: messageIds } });
    }

    await db.collection("conversations").deleteOne({ _id: new ObjectId(convoId) });
    await db.collection("chats").deleteOne({ _id: new ObjectId(chatId) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete chat error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
