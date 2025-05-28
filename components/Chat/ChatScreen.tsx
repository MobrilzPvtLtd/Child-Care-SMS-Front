"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { NextPage } from "next";
import io from "socket.io-client";
import { FiMoreVertical, FiSearch, FiPaperclip, FiSend, FiPlus, FiMessageCircle } from "react-icons/fi";
import axiosInstance from "@/utils/axios";
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

const ChatScreen: NextPage = () => {
  const { user } = useUser();
  const [chats, setChats] = useState<Chat[]>([]);
  const [filteredChats, setFilteredChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [loadingChat, setLoadingChat] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [activeTab, setActiveTab] = useState<"Parents" | "Staff">("Staff");
  const [orderBy, setOrderBy] = useState("Unread");
  const [searchFilter, setSearchFilter] = useState("");
  const socketRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const currentUserName = "MobrilzCom";

  useEffect(() => {
    // Initialize Socket Connection
    socketRef.current = io(`${process.env.BASE_URL || 'https://child-care-sms.mobrilz.digital'}`, {
      withCredentials: true,
    });

    socketRef.current.on("connect", () => {
      console.log("Socket connected");
    });

    socketRef.current.on("newMessage", (data: ChatMessage) => {
      if (user?.id && data.senderId !== parseInt(user.id)) {
        setMessages((prevMessages) => [...prevMessages, data]);
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
        setFilteredChats(response.data.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  // Filter chats based on active tab and search
  useEffect(() => {
    let filtered = chats.filter(chat => {
      // Filter by tab (assuming chat.type indicates if it's parent or staff chat)
      const matchesTab = activeTab === "Staff" ? 
        chat.type.toLowerCase().includes("staff") || chat.type === "group" :
        chat.type.toLowerCase().includes("parent");
      
      // Filter by search
      const matchesSearch = searchFilter === "" || 
        (chat.name && chat.name.toLowerCase().includes(searchFilter.toLowerCase())) ||
        chat.institute.name.toLowerCase().includes(searchFilter.toLowerCase());
      
      return matchesTab && matchesSearch;
    });

    // Sort by order
    if (orderBy === "Unread") {
      filtered = filtered.sort((a, b) => {
        // Sort unread messages first (this is a simplified version)
        return new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime();
      });
    }

    setFilteredChats(filtered);
  }, [chats, activeTab, searchFilter, orderBy]);

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
      
    const newMessage: ChatMessage = {
      id: Date.now(),
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

  const handleApplyFilters = () => {
    // Filters are applied automatically through useEffect
    console.log("Filters applied");
  };

  const handleResetAll = () => {
    setOrderBy("Unread");
    setSearchFilter("");
    setActiveTab("Staff");
  };

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

  const isCurrentUserMessage = (senderId: number): boolean => {
    return user?.id ? parseInt(user.id) === senderId : false;
  };

  return (
    <div className="flex flex-col h-[90vh] bg-white">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 ">
        <button
          onClick={() => setActiveTab("Parents")}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            activeTab === "Parents"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Parents
        </button>
        <button
          onClick={() => setActiveTab("Staff")}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            activeTab === "Staff"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Staff
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 p-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Order by</span>
          <select
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Unread">Unread</option>
            <option value="Recent">Most Recent</option>
            <option value="Alphabetical">Alphabetical</option>
          </select>
        </div>
        
        <input
          type="text"
          placeholder="Staff or Room Name"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          className="flex-1 max-w-sm border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        
        <button
          onClick={handleApplyFilters}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium"
        >
          Apply
        </button>
        
        <button
          onClick={handleResetAll}
          className="text-blue-600 hover:text-blue-700 px-4 py-2 text-sm font-medium"
        >
          Reset All
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Chat List */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="flex-1 overflow-y-auto">
            {filteredChats.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FiMessageCircle className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Get started with {activeTab.toLowerCase()} messages
                </h3>
                <p className="text-sm text-gray-500 mb-4 max-w-xs">
                  Message an individual staff member or all staff in a room, delete messages sent accidentally, and quickly find staff threads by filtering above.
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                  <span className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">i</span>
                  Learn more about messaging
                </button>
              </div>
            ) : (
              filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => handleChatClick(chat.id)}
                  className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                    activeChat?.id === chat.id ? "bg-blue-50 border-r-2 border-blue-600" : ""
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    {getInitials(chat.name || chat.institute.name)}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-900">{chat.name || chat.institute.name}</h3>
                      <span className="text-xs text-gray-500">
                        {formatLastMessageTime(chat.lastMessageAt)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{chat.type}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {loadingChat && (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-600">Loading chat...</p>
            </div>
          )}
          {!loadingChat && !activeChat && (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-600">Select a chat to start messaging</p>
            </div>
          )}
          {!loadingChat && activeChat && (
            <>
              <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    {getInitials(activeChat.name || activeChat.institute.name)}
                  </div>
                  <div className="ml-3">
                    <h2 className="font-medium text-gray-900">{activeChat.name || activeChat.institute.name}</h2>
                    <span className="text-xs text-gray-500">
                      {activeChat.lastMessageAt ? formatLastMessageTime(activeChat.lastMessageAt) : "No messages yet"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
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
                            : "bg-white text-gray-800 border border-gray-200"
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
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-3 py-2">
                  <button className="text-gray-500 hover:text-gray-700 mr-2">
                    <FiPaperclip />
                  </button>
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message"
                    className="bg-transparent border-none flex-1 focus:outline-none text-gray-800 placeholder-gray-500"
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
    </div>
  );
};

export default ChatScreen;