import React from "react";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

export default function Navbar() {
  const { userId } = auth();

  return (
    <header>
      <nav className=" bg-purple-400 flex justify-between align-center my-auto py-4 px-8 shadow-sm">
        <Link href={"/"}>
          <h1 className=" text-white text-3xl font-bold">
            <span className=" text-purple-900">Chu</span>Chat
          </h1>
        </Link>

        
        <ul className="flex items-center justify-end flex-wrap w-full">
          {/** user is authenticated */}
          {userId && (
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          )}
          {/** user not authenticated */}
          {!userId && (
            <li>
              <Link href={"sign-in"}>
                <button>
                  <p className=" bg-purple-600 text-white hover:bg-purple-300 shadow-lg p-2 rounded-md">
                    Getting Start
                  </p>
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
