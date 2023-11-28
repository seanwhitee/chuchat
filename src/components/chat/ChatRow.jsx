"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, orderBy } from "firebase/firestore";
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
      collection(db, "users", session?.user?.email, "chats", id, "messages"),
      orderBy('createAt', 'asc')

  );
  useEffect(()=>{
    if(!pathName) return;
    setActive(pathName.includes(id))
  }, [pathName, id]);

  const removeChat = async() => {
    await deleteDoc(doc(db, 'users', session?.user?.email, 'chats', id))
    router.replace('/')
  }
  return (
    <Link href={`/chat/${id}`}>
      <div className={` w-full flex items-center justify-between px-2 my-1 bg-gray-600 hover:bg-purple-500 rounded-md py-2
      ${active && ' bg-purple-500/80 animate-pulse'}`}>
        <Image
          src={"/assets/icons/message.svg"}
          alt="message"
          width={25}
          height={25}
        ></Image>
        <h3 className=" ms-1 me-10 w-3/5 overflow-hidden h-[25px]">
          {messages?.docs[0]?.data()?.text || "New Chat"}
        </h3>
        <div className=" hover:bg-purple-400 p-1 rounded-md">
          <Image
            src={"/assets/icons/trash.svg"}
            alt="trash-icon"
            width={25}
            height={25}
            
            onClick={removeChat}
          ></Image>
        </div>
      </div>
    </Link>
  );
};

export default ChatRow;
