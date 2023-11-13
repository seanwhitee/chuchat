"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav className=" bg-gray-900 flex justify-between my-auto py-4 px-8 shadow-sm">
        <Link href={"/"}>
          <h1 className=" text-white text-3xl font-bold">
            <span className=" text-purple-500">Chu</span>Chat
          </h1>
        </Link>

        <ul className="flex items-center justify-end w-full">
          <div className="flex justify-center bg-purple-500 px-3 py-2 rounded-lg">
            {/**take the user to chatroom home page */}
            <Link href={"/chat"}>
              <button className="text-sm font-bold animate-pulse text-white">
                Go To Chat
              </button>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}
