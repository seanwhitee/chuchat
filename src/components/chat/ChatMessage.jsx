"use client";
import React from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

/**
 *
 * @param {*} props
 *            props.identityImage: identity image either user or bot image.
 * @returns
 */
const ChatMessage = (props) => {
  const { isLoaded, isSignedIn, user } = useUser();

  {/**temp data, future data will fetch from database */}
  const data = {
    // Bing | Bard | Gpt | User
    identity: "User", 
    message: `hellow-[52rem]w-[52rew-[52rem]w-[52rem]w-[52rem]w-[52rem]m]w-[52rem]w- w-[52rem]`,
    identityImage: user.imageUrl
  }
  return (
    <div className="flex py-6 w-full text-white bg-gray-900 px-3">
      <div className="me-3 flex justify-center items-start w-4/12">
        {/**identity image */}
        <Image
          src={data.identityImage}
          alt="identity image"
          width={45}
          height={45}
        ></Image>
      </div>
      {/**message body */}
      <div className=" w-8/5 text-xs md:text-md lg:text-lg font-light">{data.message}</div>
    </div>
  );
};

export default ChatMessage;
