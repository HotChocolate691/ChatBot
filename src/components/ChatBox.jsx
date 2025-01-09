import React, { useState, useEffect } from "react";
import Message from "./Message";
import InputBox from "./InputBox";
import { getResponse } from "../api/OpenAI";
import { SiApifox } from "react-icons/si";
import "../App.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [showGreeting, setShowGreeting] = useState(true);
  const [userName, setUserName] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  // useeffect here
  useEffect(() => {
    if (!userName && showPopup) {
      setShowPopup(true);
    }
  }, [userName]);

  const addMessage = async (message, isBot = false) => {
    setMessages([...messages, { text: message, isBot }]);
    setShowGreeting(false);
    if (!isBot) {
      const botResponse = await getResponse(message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, isBot: true },
      ]);
    }
  };

  const handleNameSubmit = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center h-screen">
      {/* Main Chat Box */}
      <div className="w-full md:w-9/10 flex flex-col h-screen bg-white">
        {/* Header */}
        <div className="flex px-5 pt-5 pb-4 items-center justify-start h-auto">
          <SiApifox className="text-purple-500 text-xl ml-1 mr-1" />
          <h3 className="text-purple-500 font-semibold mx-1 text-2xl">Azyle</h3>
        </div>
        <hr className="border-purple-200 mx-6 mt-2" />

        {/* Greeting Message */}
        {showGreeting && (
          <div className="flex-grow p-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-normal mb-2 md:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello {`, ${userName}`} ! <br />
            </h1>
            <span className="text-2xl md:text-4xl lg:text-6xl text-center text-gray-400">
              How can I assist you today?
            </span>
            <p className="text-sm md:text-lg text-gray-400 font-normal pt-3">
              Feel free to ask any questions.
            </p>
          </div>
        )}

        {/* Chat Messages */}
        <div className=" flex-grow p-2 md:p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} isBot={msg.isBot} />
          ))}
        </div>

        {/* Input Box */}
        <InputBox onSend={addMessage} />
      </div>

      {/* Customizable Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-normal">
              What's your name?
            </h3>
            <input
              type="text"
              className="border p-2 rounded-lg w-full outline-none"
              placeholder="Enter your name"
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={(e) => {
                e.key === "Enter" ? handleNameSubmit() : null;
              }}
            />
            <div className="mt-4 flex justify-center">
              <button
                className=" px-4 py-2 rounded-lg first-btn"
                onClick={handleNameSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
