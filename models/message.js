import { ObjectId } from 'mongodb';
import { connectToDatabase } from './mongodb.js';

export async function createMessage({ senderName, text }) {
  const { db } = await connectToDatabase();
  const result = await db.collection('messages').insertOne({
    senderName,
    text,
    role, //user or ai
    timestamp: new Date()
  });
  return result.insertedId;
}
