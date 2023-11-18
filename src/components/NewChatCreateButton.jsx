"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export const NewChatCreateButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const createNewChatRoom = async () => {
    try {

      const doc = await addDoc(
        collection(db, "users", session.user.email, "chats"),
        {
          messages: [],
          userId: session.user.email,
          createAt: serverTimestamp(),
        }
      );
      router.push(`/chat/${doc.id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button
      onClick={createNewChatRoom}
      className=" ps-3 py-2 text-start m-1 w-9/12 rounded-md hover:bg-purple-500 bg-gray-700 flex items-center"
    >
      <Image
        src="/assets/icons/plus.svg"
        width={20}
        height={20}
        alt="plus"
        className="me-2"
      ></Image>
      <p className="text-white">New Chat</p>
    </button>
  );
};
