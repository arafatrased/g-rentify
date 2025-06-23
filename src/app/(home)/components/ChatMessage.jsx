"use client";

import ChatBotIcon from "./ChatBotIcon";

export default function ChatMessage({ chat }) {
  return (
    !chat.hideInChat && (
      <div
        className={`max-w-10/12 mb-4 flex gap-2 items-start ${
          chat.role === "user" && "ml-auto"
        }`}
      >
        <div>{chat.role === "model" && <ChatBotIcon />}</div>
        <p
          className={`${
            chat.role === "user" &&
            "bg-[#E9EEF5] text-gray-900 rounded-2xl rounded-br-none"
          } ${
            chat.role === "model" &&
            "bg-green-100 text-gray-900 rounded-2xl rounded-tl-none"
          } p-2 text-wrap whitespace-pre-line w-full text-[15px]`}
        >
          {chat.text}
        </p>
      </div>
    )
  );
}
