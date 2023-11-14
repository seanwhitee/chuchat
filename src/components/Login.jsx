"use client";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <h1 className=" text-white lg:text-9xl text-6xl font-bold">
        <span className=" text-purple-500">Chu</span>Chat
      </h1>
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold lg:text-3xl text-lg animate-pulse border-1 rounded-lg bg-purple-500/50 hover:bg-purple-300/50 px-3 py-2 mt-5"
      >
        Sign in to use ChuChat
      </button>
    </div>
  );
};

export default Login;
