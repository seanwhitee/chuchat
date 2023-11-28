"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";

const OptionMenu = () => {
  return (
    <div className="absolute left-3 bottom-16 mb-2  bg-gray-600 text-white px-1 py-1 rounded-lg w-56">
      <button
        onClick={() => signOut()}
        className=" hover:bg-purple-500/50 rounded-lg pe-10 py-1 flex items-center w-full"
      >
        <Image
          src={"/assets/icons/sign-out.svg"}
          alt="sign-out"
          width={30}
          height={30}
          className=" me-5 ms-2"
        ></Image>
        <div className="">Log out</div>
      </button>
    </div>
  );
};

export default OptionMenu;
