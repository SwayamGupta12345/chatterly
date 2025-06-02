import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { db } = await connectToDatabase();

    // 1. Find the user
    const user = await db.collection('users').findOne({ email: session.user.email });

    if (!user || !user.chats_arr || user.chats_arr.length === 0) {
      return NextResponse.json({ chats: [] });
    }

    // 2. Fetch chats using chat IDs from user's chats_arr
    const chatIds = user.chats_arr.map((id) => new ObjectId(id));

    const chats = await db.collection('chats')
      .find({ _id: { $in: chatIds } })
      .project({ name: 1, convoId: 1 })
      .toArray();

    // 3. Send back the chats
    return NextResponse.json({ chats });
  } catch (error) {
    console.error('Error fetching user chats:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
