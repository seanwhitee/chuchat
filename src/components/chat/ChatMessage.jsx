"use client";

import React from "react";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";

const ChatMessage = ({ message }) => {
  return message?.user.name === "ChatGpt" ||
    message?.user.name === "Bard" ||
    message?.user.name === "Bing" ? (
    // The bot output
    <div className="flex py-6 w-full px-3">
      <div className="me-2 flex justify-center items-start w-1/12">
        <Image
          src={message.user.avatar}
          alt="user-avatar"
          width={45}
          height={45}
        ></Image>
      </div>

      <div className="border-2 rounded-lg border-white/50 p-5 shadow-2xl w-10/12 font-light text-black">
        <Markdown
          className="flex flex-col overflow-scroll text-sm"
          remarkPlugins={[remarkGfm]}
        >
          {message.text}
        </Markdown>
      </div>
    </div>
  ) : (
    // The user output
    <div className="flex py-6 w-full text-white px-3">
      <div className=" me-2 flex justify-center items-start w-1/12">
        <Image
          
          src={message.user.avatar}
          alt="user-avatar"
          width={45}
          height={45}
        ></Image>
      </div>

      <div className=" border-2 rounded-lg border-white/50 p-5 shadow-2xl w-10/12 font-light text-black">
        <Markdown className="flex text-sm flex-col overflow-scroll" remarkPlugins={[remarkGfm]}>{message.text}</Markdown>
      </div>
    </div>
  );
};

export default ChatMessage;
