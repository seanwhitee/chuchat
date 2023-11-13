"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useSession } from "next-auth/react";

/**
 *
 * @param {*} props
 *            props.id: chatroom id
 * @returns
 */
const ChatRow = ({ id }) => {
  const router = useRouter();
  const pathName = usePathname();
  const [active, setActive] = useState(false);
  const { data: session } = useSession();
  const [messages] = useCollection(
      collection(db, "users", session?.user?.email, "chats", id, "messages")
  );
  
  useEffect(()=>{
    if(!pathName) return;
    setActive(pathName.includes(id))
  }, [pathName, id]);

  const removeChat = async() => {
    await deleteDoc(doc(db, 'users', session?.user?.email, 'chats', id))
    router.replace('/chat')
  }

  return (
    <Link href={`/chat/${id}`}>
      <div className={` w-full flex items-center justify-between px-2 my-1 bg-gray-700 hover:bg-purple-500 rounded-md py-2
      ${active && ' bg-purple-500/50  animate-pulse delay-1000'}`}>
        <Image
          src={"/assets/icons/message.svg"}
          alt="message"
          width={25}
          height={25}
        ></Image>
        <h3 className=" me-20 ms-2 overflow-hidden h-[25px]">
          {messages?.docs[messages?.docs.length - 1]?.data().message.text || "New Chat"}
        </h3>
        <Image
          src={"/assets/icons/trash.svg"}
          alt="trash-icon"
          width={25}
          height={25}
          className=" hover:bg-purple-400 rounded-md"
          onClick={removeChat}
        ></Image>
      </div>
    </Link>
  );
};

export default ChatRow;
