"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" absolute top-0 bg-white border-b-[1px] border-gray-300/50 flex justify-between my-auto py-3 px-2 w-full shadow-sm">
      <Link href={"/"}>
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/icons/app-icon.svg"}
            width={30}
            height={30}
            alt="app-icon"
          >

          </Image>
        
        <h1 className="ms-1 text-black text-2xl font-mono">
          <span className=" text-purple-500">Chu</span>Chat
        </h1>
        </div>
      </Link>

      <ul className="flex items-center justify-end">
        {/**take the user to chatroom home page */}
        <button
          onClick={() => signIn("google")}
          className=" text-white font-semibold text-sm border-1 rounded-md  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 px-3 py-2"
        >
          Getting start
        </button>
      </ul>
    </nav>
  );
}
