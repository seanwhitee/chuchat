"use client";

import React from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <header>
      <nav className=" bg-gray-900 flex justify-between align-center my-auto py-4 px-8 shadow-sm">
        <Link href={"/"}>
          <h1 className=" text-white text-3xl font-bold">
            <span className=" text-purple-500">Chu</span>Chat
          </h1>
        </Link>

        
        <ul className="flex items-center justify-end flex-wrap w-full">
          {/** user is authenticated */}
          {isSignedIn && (
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          )}
          
        </ul>
      </nav>
    </header>
  );
}
