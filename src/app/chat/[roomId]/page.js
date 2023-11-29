import React from "react";
import UserInputArea from "@/components/UserInputArea";
import ChatMessage from "@/components/chat/ChatMessage";
import Sidebar from "@/components/Sidebar";
import Chat from "@/components/chat/chat";

import { getServerSession, authOptions } from "next-auth";
import { redirect } from "next/navigation";

const Page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/')
  }
  return (
    <div className="flex  flex-col bg-white">
      <div className=" flex justify-center">
        <div className="flex flex-col justify-between">
          <Chat chatId={params.roomId} />

          {/**user promting */}
          <div className=" fixed bottom-0 left-0 py-5 items-center justify-center flex w-full">
            <UserInputArea chatId={params.roomId} />
          </div>

          {/**Sidebar for seleteced chatrooms */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Page;
