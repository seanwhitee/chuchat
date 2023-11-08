import React from "react";
import Image from "next/image";

/**
 *
 * @param {*} props
 *            props.identityImage: identity image either user or bot image.
 * @returns
 */
const ChatMessage = (props) => {
  return (
    <div className="flex py-2 w-full">
      <div className="me-5">
        {/**identity image */}
        <Image
          src={props.identityImage}
          alt="identity image"
          width={36}
          height={36}
        ></Image>
      </div>
      {/**message body */}
      <div className="">{props.message}</div>
    </div>
  );
};

export default ChatMessage;
