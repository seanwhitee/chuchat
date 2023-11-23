"use client";

import React from "react";
import Image from "next/image";

const ChatMessage = ({ message }) => {
  
  
  return (
    (message.user.name === ('ChatGpt' || 'Bing' || 'Bard')) ? (
      // The bot output
      <div className="flex py-6 w-full text-white px-3">
      <div className="me-3 flex justify-center items-start w-2/12">
        <Image
          src={message.user.avatar}
          alt="user-avatar"
          width={45}
          height={45}  
        >

        </Image>
      </div>

      <div className="flex items-center w-10/12 text-xs md:text-md lg:text-lg font-light text-white">
        {message.text}
      </div>
    </div>
    ) : (
        // The user output
        <div className="flex py-6 w-full text-white px-3">
        <div className="me-3 flex justify-center items-start w-2/12">
          <Image
            src={message.user.avatar}
            alt="user-avatar"
            width={45}
            height={45}  
          >
  
          </Image>
        </div>
  
        <div className="flex items-center w-10/12 text-xs md:text-md lg:text-lg font-light text-white">
          {message.text}
        </div>
      </div>
      
    )
    
    
  );
};

export default ChatMessage;
