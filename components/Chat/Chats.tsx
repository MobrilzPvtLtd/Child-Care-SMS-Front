"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { NextPage } from "next";
import io from "socket.io-client";
import { FiMoreVertical, FiSearch, FiPaperclip, FiSend } from "react-icons/fi";
import { axiosInstance } from "@/utils/axios";
import { useUser } from "@/context/UserContext";

interface ChatMessage {
  id: number;
  chatId: number;
  senderId: number;
  receiverIds: string;
  content: string;
  status: string;
  isRead: boolean;
  attachmentUrl: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  sender: {
    id: number;
    name: string;
  };
}

interface Chat {
  id: number;
  name: string | null;
  type: string;
  members: number[];
  lastMessageAt: string;
  messages: ChatMessage[];
  institute: {
    id: number;
    name: string;
  };
}

interface User {
  id: string;
  name?: string;
}

const Chats: NextPage = () => {
  const { user } = useUser();
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [loadingChat, setLoadingChat] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const socketRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const currentUserName = "MobrilzCom"; // Current user's login

  useEffect(() => {
    // Initialize Socket Connection
    socketRef.current = io(`${process.env.BASE_URL || 'https://child-care-sms.mobrilz.digital/v1/'}`, {
      withCredentials: true,
    });

    socketRef.current.on("connect", () => {
      console.log("Socket connected");
    });

    socketRef.current.on("newMessage", (data: ChatMessage) => {
      if (user?.id && data.senderId !== parseInt(user.id)) {
        setMessages((prevMessages) => [...prevMessages, data]);
        // markMessageAsRead(data.id);
      }
    });

    socketRef.current.on("messageRead", (data: { messageId: number }) => {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === data.messageId ? { ...msg, isRead: true } : msg
        )
      );
    });

    return () => socketRef.current?.disconnect();
  }, [user?.id]);

  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axiosInstance.get("/chat/chats");
        setChats(response.data.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  const fetchChatById = async (chatId: number) => {
    setLoadingChat(true);
    try {
      const response = await axiosInstance.get(`/chat/chats/${chatId}`);
      setActiveChat(response.data.data);
      setMessages(response.data.data.messages || []);
      socketRef.current.emit("joinChat", chatId);
    } catch (error) {
      console.error(`Error fetching chat ${chatId}:`, error);
    } finally {
      setLoadingChat(false);
    }
  };

  const handleChatClick = (chatId: number) => {
    fetchChatById(chatId);
  };

  const handleSendMessage = async () => {
    if (!messageInput.trim() || !activeChat || !user?.id) return; 
      
    // Create a temporary message structure that matches the server format
    const newMessage: ChatMessage = {
      id: Date.now(), // This will be temporary until server responds
      chatId: activeChat.id,
      senderId: parseInt(user.id),
      receiverIds: JSON.stringify(activeChat.members.filter(id => id !== parseInt(user.id))),
      content: messageInput,
      status: "sending",
      isRead: false,
      attachmentUrl: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: null,
      sender: {
        id: parseInt(user.id),
        name: currentUserName
      }
    }; 

    setMessages([...messages, newMessage]);
    setMessageInput("");

    try {
      const response = await axiosInstance.post(
        "/chat/messages",
        {
          chatId: activeChat.id,
          content: messageInput,
        }
      );

      if (response.data.success) {
        socketRef.current.emit("newMessage", response.data.data);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Format date to YYYY-MM-DD HH:MM:SS
  const formatMessageTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, '0');
      const day = String(date.getUTCDate()).padStart(2, '0');
      const hours = String(date.getUTCHours()).padStart(2, '0');
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');
      
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    } catch (e) {
      console.error("Error formatting time:", e);
      return "";
    }
  };

  // Format date for chat list
  const formatLastMessageTime = (dateString: string) => {
    try {
      return formatMessageTime(dateString);
    } catch (e) {
      console.error("Error formatting chat time:", e);
      return "";
    }
  };

  const getInitials = (name: string | null) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    return nameParts.map((part) => part[0]).join("").toUpperCase();
  };

  // Check if a message is from the current user
  const isCurrentUserMessage = (senderId: number): boolean => {
    return user?.id ? parseInt(user.id) === senderId : false;
  };

  return (
    <div className="flex rounded-2xl border h-[83vh] border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="w-80 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Chats</h1>
          <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            <FiMoreVertical />
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2">
            <FiSearch className="text-gray-500 dark:text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none flex-1 focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatClick(chat.id)}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                activeChat?.id === chat.id ? "bg-gray-200 dark:bg-gray-700" : ""
              }`}
            >
              <div className="relative w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                {getInitials(chat.name || chat.institute.name)}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">{chat.name || chat.institute.name}</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatLastMessageTime(chat.lastMessageAt)}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{chat.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {loadingChat && (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">Loading chat...</p>
          </div>
        )}
        {!loadingChat && !activeChat && (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">Select a chat to start messaging</p>
          </div>
        )}
        {!loadingChat && activeChat && (
          <>
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {getInitials(activeChat.name || activeChat.institute.name)}
                </div>
                <div className="ml-3">
                  <h2 className="font-medium text-gray-800 dark:text-gray-200">{activeChat.name || activeChat.institute.name}</h2>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {activeChat.lastMessageAt ? formatLastMessageTime(activeChat.lastMessageAt) : "No messages yet"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex mb-4 ${isCurrentUserMessage(message.senderId) ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[75%]">
                    <div
                      className={`p-3 rounded-lg ${
                        isCurrentUserMessage(message.senderId)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 text-gray-800"
                      }`}
                    >
                      {message.content}
                      <small className="text-xs opacity-75 block mt-1">
                        {formatMessageTime(message.createdAt)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2">
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mr-2">
                  <FiPaperclip />
                </button>
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type a message"
                  className="bg-transparent border-none flex-1 focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700"
                >
                  <FiSend />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chats;