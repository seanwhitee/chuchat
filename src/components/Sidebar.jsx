"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import NewChat from "./chat/NewChat";

const Sidebar = () => {
  {
    /**fetch chatrooms data */
  }

  const [isClosed, setIsClosed] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();
  
  const handleClicked = () => {
    setIsClosed(!isClosed);
  };

  return isClosed ? (
    <button
      onClick={handleClicked}
      className="p-2 h-11 w-10 rounded-md border-2 border-gray-300 m-1  bg-purple-400 top-1 fixed"
    >
      <Image
        src="/assets/icons/arrow-right.svg"
        width={20}
        height={20}
        alt="arrow-right"
      />
    </button>
  ) : (
    <div className=" w-64 rounded-lg bg-purple-600 p-1 text-white flex flex-col h-full justify-between fixed top-0 shadow-lg">
      <div className="flex">
        <button className="border-2 ps-3 py-2 text-start m-1 w-9/12 rounded-md hover:bg-purple-300 bg-purple-400 flex items-center">
          <Image
            src="/assets/icons/plus.svg"
            width={20}
            height={20}
            alt="plus"
            className="me-2"
          ></Image>
          <p className="text-black">New Chat</p>
        </button>
        <button
          onClick={handleClicked}
          className="border-2 p-2 m-1 rounded-md hover:bg-purple-300 bg-purple-400"
        >
          <Image
            src="/assets/icons/arrow-left.svg"
            width={20}
            height={20}
            alt="arrow-left"
          ></Image>
        </button>
      </div>
      {/**chat rooms container */}
      <div className="flex flex-col overflow-scroll justify-start h-full w-full py-5">
        <NewChat title={"New Chat"}/>
        
      </div>
      <div className="flex p-2 items-center justify-start pt-16 border-t-2 border-purple-400">
        <UserButton afterSignOutUrl="/" />
        
        {isSignedIn && <p className="ms-2">{user.fullName}</p>}
      </div>
    </div>
  );
};

export default Sidebar;
