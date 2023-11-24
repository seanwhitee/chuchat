"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";

const OptionMenu = () => {
  return (
    <div className="absolute left-5 bottom-16 bg-white text-gray-900 px-1 py-1 rounded-lg">
      <button
        onClick={() => signOut()}
        className=" hover:bg-purple-500/50 rounded-lg pe-10 py-1 flex items-center"
      >
        <Image
          src={"/assets/icons/sign-out.svg"}
          alt="sign-out"
          width={30}
          height={30}
          className=" me-5 ms-2"
        ></Image>
        <div>Sign Out</div>
      </button>
    </div>
  );
};

export default OptionMenu;
