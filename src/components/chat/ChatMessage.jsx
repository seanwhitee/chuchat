"use client";

import React from "react";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ChatMessage = ({ message }) => {
  return message?.user.name === "ChatGpt" ||
    message?.user.name === "Bard" ||
    message?.user.name === "Bing" ? (
    // The bot output
    <div className="flex py-6 w-10/12 px-3">
      <div className="me-2 flex justify-center items-start w-1/12">
        <Image
          src={message.user.avatar}
          alt="user-avatar"
          width={45}
          height={45}
        ></Image>
      </div>

      <div className="border-2 rounded-lg border-white/50 p-5 w-10/12 font-light text-black">
        <Markdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props} />
              );
            },
          }}
          className="flex flex-col overflow-scroll lg:text-sm md:text-sm text-xs"
          remarkPlugins={[remarkGfm]}
        >
          {message.text}
        </Markdown>
      </div>
    </div>
  ) : (
    // The user output
    <div className="flex py-6 w-10/12 text-white px-3">
      <div className=" me-2 flex justify-center items-start w-1/12">
        <Image
          src={message.user.avatar}
          alt="user-avatar"
          width={45}
          height={45}
        ></Image>
      </div>

      <div className=" border-2 rounded-lg border-white/50 p-5 w-10/12 font-light text-black">
        <Markdown
          className="flex lg:text-sm md:text-sm text-xs flex-col overflow-scroll"
          remarkPlugins={[remarkGfm]}
        >
          {message.text}
        </Markdown>
      </div>
    </div>
  );
};

export default ChatMessage;
