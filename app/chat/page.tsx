"use client";
import React, { useState, useEffect, useRef } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://localhost:5000");

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const lastMessageRef = useRef(null);

  // Function to generate a random profile image URL
  const getRandomProfileImage = () => {
    const images = [
      "https://unsplash.com/photos/a-woman-working-on-a-laptop-6uAssP0vuPs",
      "https://unsplash.com/photos/a-woman-working-on-a-laptop-6uAssP0vuPs",

      // Add more profile image URLs here
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    client.onmessage = (message) => {
      const newMessage = JSON.parse(message.data);
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, newMessage];
        sessionStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    };

    // Load messages from sessionStorage on component mount
    const storedMessages = sessionStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const newMessage = {
        text: inputMessage,
        sender: window.location.port, // Use the port number as sender identifier
        time: currentTime,
        profileImage: getRandomProfileImage(), // Add a random profile image URL
      };
      client.send(JSON.stringify(newMessage));
      setInputMessage("");
    }
  };
  return (
    <div className="container my-16 flex h-screen w-1/2 flex-col content-center py-5">
      <h1>Chat Room</h1>
      <div className=" my-16  flex-1  overflow-y-auto">
        {messages.map((message, index) => {
          // Determine if the message was sent by the current user
          const isCurrentUserMessage = message.sender === window.location.port;
          return (
            <div
              key={index}
              className={`flex ${
                isCurrentUserMessage ? "justify-end" : "justify-start"
              } mb-2`}
              ref={
                isCurrentUserMessage && index === messages.length - 1
                  ? lastMessageRef
                  : null
              }
            >
              <div
                className={`max-w-fit rounded-lg p-2 ${
                  isCurrentUserMessage
                    ? "bg-primary text-white"
                    : "bg-yellow text-white"
                }`}
              >
                <div className="mb-1 flex items-center">
                  {!isCurrentUserMessage && (
                    <img
                      src="./images/driving.jpg"
                      alt="Profile"
                      className="mr-2 h-8 w-8 rounded-full"
                    />
                  )}
                  <span className="text-sm">{message.time}</span>
                </div>
                {message.text}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center p-4">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="border-gray-300 mr-2 w-3/4 rounded-lg border px-4 py-2"
        />
        <button
          onClick={sendMessage}
          className="rounded-sm bg-primary py-2 px-4 font-semibold text-white hover:bg-opacity-90"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
