"use client";
import { useEffect, useRef, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import ChatBotIcon from "./ChatBotIcon";
import { applicationInfo } from "./ApplicationInfo";

export default function SupportChatbot() {
  const [open, setOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: applicationInfo,
    },
  ]);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    // helper function to update history
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    // formet history for API request
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      // bot response
      const response = await fetch(
        process.env.NEXT_PUBLIC_GEMINI_API_KEY,
        requestOption
      );
      const data = await response.json();

      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");

      // clean and update chat History with bot response
      const apiResponseText = data.candidates[0].content.parts[0].text;
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message);
    }
  };

  useEffect(() => {
    // Auto scroll whenever chat history changes
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <>
      {/* Floating Button */}
      <button
        className={`${
          !open ? "" : ""
        }fixed bottom-6 right-6 bg-[#03b00b] hover:bg-green-600 cursor-pointer text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 ease-in-out`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`transition-transform duration-300 ease-in-out ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          {!open ? (
            // message icon
            <FiMessageCircle className="w-6 h-6" />
          ) : (
            // close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          )}
        </div>
      </button>

      {/* Chat Window */}
      <div className="">
        <div
          className={`${
            open ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } origin-bottom-right transition-all duration-300 ease-in-out fixed bottom-20  right-0 sm:right-6 w-full sm:w-[350px] bg-white rounded-md shadow-2xl flex flex-col justify-between overflow-hidden z-[999]`}
        >
          {/* chatBot header */}
          <div className="bg-[#03b00b] text-white p-3 font-semibold flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* chatBot icon */}
              <ChatBotIcon />
              Support Chat
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="cursor-pointer hover:bg-green-600 rounded-full p-1"
            >
              {/* arrow down icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="#e3e3e3"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </button>
          </div>

          {/* chatBot body */}
          <div
            ref={chatBodyRef}
            className="p-3 space-y-4 overflow-y-auto h-[450px] sm:h-96 bg-gray-50 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-200 hover:scrollbar-thumb-green-500"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#00b22c transparent",
            }}
          >
            <div className="flex items-start gap-2 max-w-xs">
              <ChatBotIcon />
              <p className="bg-green-100 p-2 rounded-2xl rounded-tl-none text-[15px]">
                Welcome to G-rentify Support, <br /> How can i help you today?
              </p>
            </div>
            {/* render chat history dynamically */}
            {chatHistory.map((chat, index) => {
              return <ChatMessage key={index} chat={chat} />;
            })}
          </div>

          {/* chatBot footer */}
          <div className="p-3 relative">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      </div>
    </>
  );
}
