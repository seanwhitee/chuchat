"use client";

import React from "react";
import InputArea from "@/components/UserInputArea";
import UserInputArea from "@/components/UserInputArea";
import ChatMessage from "@/components/chat/ChatMessage";
import { useUser } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";

const Page = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  {
    /**fetch message data from database */
  }
  return (
    <div className="flex flex-col w-full justify-between h-screen">
      <div className="mx-auto break-words h-full overflow-scroll flex flex-col lg:w-[30rem] md:w-[25rem] w-[20rem] bg-gray-200 items-center justify-between py-5">
        {isSignedIn && (
          <ChatMessage
            message={
              "hellow-[52rem]w-[52rew-[52rem]w-[52rem]w-[52rem]w-[52rem]m]w-[52rem]w- w-[52rem]"
            }
            identityImage={user.imageUrl}
          />
        )}
      </div>

      {/**user promting */}

      <div className=" fixed bottom-0 py-5 items-center justify-center flex w-full">
        <UserInputArea />
      </div>
      <Sidebar />
    </div>
  );
};

export default Page;
