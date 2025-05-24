"use client";

import { useRef, useState } from "react";

export default function ChatForm({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}) {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // clear input field
    inputRef.current.value = "";

    // update chatHistory with user message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // add thinking placeholter for bot response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);

      // call the function to generate the bot response
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Using the details provaided above, please address the query ${userMessage}`,
        },
      ]);
    }, 600);
  };

  return (
    <div className="relative">
      <form onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          className="px-3 py-2 outline-gray-200 w-full rounded-full focus:outline-[#03b00b] outline-1"
          type="text"
          placeholder="Type your message..."
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button
          type="submit"
          className={`bg-[#03b00b] text-white p-1.5 rounded-full absolute top-[2px] right-[3px] cursor-pointer transition-opacity duration-200 ${
            inputValue.trim() ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
