"use client";

import React from "react";
import ChatMessage from "./ChatMessage";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../../firebase";
import { query, orderBy, collection } from "firebase/firestore";

const Chat = ({ chatId }) => {
  const { data: session } = useSession();
  const [messages, loading, error] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createAt", "asc")
      )
  );

  return (
    <div
      className="lg:pb-20 md:pb-20 pb-20 mx-auto break-words overflow-scroll flex flex-col lg:w-[60rem] md:w-[50rem] w-[30rem]
          bg-white px-3 items-center justify-start py-5"
    >
      {messages?.docs.map((mess) => {
        return <ChatMessage key={mess.id} message={mess.data()} />;
      })}
    </div>
  );
};

export default Chat;
