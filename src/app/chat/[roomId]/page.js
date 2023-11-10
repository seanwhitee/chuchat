"use client";

import React from "react";
import InputArea from "@/components/UserInputArea";
import UserInputArea from "@/components/UserInputArea";
import ChatMessage from "@/components/chat/ChatMessage";
import { useUser } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";

const Page = ({params}) => {
  const { isSignedIn, user, isLoaded } = useUser();
  
  {
    /**fetch message data from database */
    
  }
  console.log(params.roomId)
  return (
    <div className="flex flex-col w-full justify-between h-screen">
      <div className="mx-auto break-words h-full overflow-scroll flex flex-col lg:w-[60rem] md:w-[25rem] w-[20rem] bg-black px-3 items-center justify-start py-5">
        {isSignedIn && (
          <>
          <ChatMessage
            userId={user.id}
            chatRoomId={params.roomId}
            
          />
          
          </>
        )}
      </div>

      {/**user promting */}

      <div className=" fixed bottom-0 py-5 items-center justify-center flex w-full">
        <UserInputArea />
      </div>

      {/**Sidebar for seleteced chatrooms */}
      <Sidebar />
    </div>
  );
};

export default Page;
