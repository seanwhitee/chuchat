"use client";
import OptionMenu from "./OptionMenu";

import React, { useState } from "react";
import { useSession } from "next-auth/react";

import Image from "next/image";
import { NewChatCreateButton } from "./NewChatCreateButton";
import ChatRow from "./chat/ChatRow";

import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { collection, orderBy, query } from "firebase/firestore";

const Sidebar = () => {
  const { data: session } = useSession();

  const [isClosed, setIsClosed] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, "users", session?.user?.email, "chats"),
      orderBy('createAt', 'desc'))
  );
  const handleClicked = () => {
    setIsClosed(!isClosed);
  };
  return isClosed ? (
    <>
      <button
        onClick={handleClicked}
        className="p-2 h-11 w-10 rounded-md border-2 border-gray-300 m-1 bg-purple-500 top-1 left-1 fixed"
      >
        <Image
          src="/assets/icons/arrow-right.svg"
          width={20}
          height={20}
          alt="arrow-right"
        />
      </button>
    </>
  ) : (
    <div className=" px-3 w-64 bg-black p-1 text-white flex flex-col h-full justify-between fixed left-0 top-0 shadow-lg">
      <div className="flex">
        <NewChatCreateButton />
        <button
          onClick={handleClicked}
          className=" p-2 m-1 rounded-md hover:bg-purple-500 bg-gray-600"
        >
          <Image
            src="/assets/icons/arrow-left.svg"
            width={20}
            height={20}
            alt="arrow-left"
            className=""
          ></Image>
        </button>
      </div>
      {/**chat rooms container */}
      <div className="flex flex-col overflow-scroll justify-start h-full w-full py-5">
        {/**All new chatrooms */}
        {chats?.docs.map((chat)=>{
          return <ChatRow key={chat.id} id={chat.id}/>
        })}
      </div>
      <div className="flex pb-2 items-center justify-start pt-16">
        {session && (
          <button
          onClick={()=>{
            setIsMenuOpened(!isMenuOpened)
          }}
          className="hover:bg-gray-600 flex items-center py-1 w-56 px-2 rounded-lg">
            <Image
              
              src={session.user.image}
              alt="user image"
              width={45}
              height={45}
              className="rounded-full border-2"
            />
            <p className="ms-2 font-bold">{session.user.name}</p>
          </button>
        )}
      </div>

      <div>
        {isMenuOpened && (
          <OptionMenu />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
