import React, { useState } from "react";
import Image from "next/image";

/**
 *
 * @param {*} props
 *            props.title: title of the new chatroom
 * @returns
 */
const NewChat = (props) => {

  return (
    <div
      
      className={`w-full flex items-center justify-center hover:bg-purple-500 rounded-md py-2`}
    >
      <Image
        src={"/assets/icons/message.svg"}
        alt="message"
        width={25}
        height={25}
      ></Image>
      <h3 className=" me-20 ms-2">{props.title}</h3>
      <Image
        src={"/assets/icons/trash.svg"}
        alt="trash-icon"
        width={25}
        height={25}
        className=" hover:bg-purple-400 rounded-md"
      ></Image>
    </div>
  );
};

export default NewChat;
