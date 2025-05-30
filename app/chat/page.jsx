"use client"
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export default function ChatPage() {
  const [receiverId, setReceiverId] = useState("");  // Friend's email
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const senderId = typeof window !== "undefined" ? localStorage.getItem("email") : "";

  useEffect(() => {
    if (senderId) socket.emit("join", senderId);

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, { senderId: data.senderId, message: data.message }]);
    });

    return () => socket.disconnect();
  }, [senderId]);

  const handleSend = () => {
    if (message && receiverId) {
      socket.emit("send_message", { senderId, receiverId, message });
      setMessages((prev) => [...prev, { senderId, message }]);
      setMessage("");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Chat with a Friend</h1>

      <input
        type="email"
        placeholder="Enter friend's email"
        value={receiverId}
        onChange={(e) => setReceiverId(e.target.value)}
        className="border rounded w-full p-2 mb-4"
      />

      <div className="border rounded p-4 h-64 overflow-y-scroll bg-gray-50 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 p-2 rounded ${
              msg.senderId === senderId ? "bg-blue-200 text-right ml-auto" : "bg-green-200"
            }`}
          >
            {msg.message}
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="border rounded p-2 flex-grow mr-2"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
}