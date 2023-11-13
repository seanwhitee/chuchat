"use client";
import React from "react";
import Image from "next/image";

/**
 *
 * @param {*} props
 *            props.identityImage: identity image either user or bot image.
 * @returns
 */
const ChatMessage = ({chatId}) => {


  {/**temp data, future data will fetch from database */}
  
  return (
    <div className="flex py-6 w-full text-white bg-gray-900 px-3">
      <div className="me-3 flex justify-center items-start w-4/12">
        {/**identity image */}
        {/* <Image
          src={data.identityImage}
          alt="identity image"
          width={45}
          height={45}
        ></Image> */}
      </div>
      {/**message body */}
      <div className=" w-8/5 text-xs md:text-md lg:text-lg font-light">{"dd"}</div>
    </div>
  );
};

export default ChatMessage;
