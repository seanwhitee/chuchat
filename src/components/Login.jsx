"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center">
      <h1 className=" text-black lg:text-6xl text-6xl font-bold">
        <span className=" text-purple-500">Chu</span>Chat
      </h1>
      
      <button
        onClick={() => signIn("google")}
        className="my-5 text-white font-semibold text-md border-1 rounded-md bg-purple-500 hover:bg-purple-500/50 px-3 py-2"
      >
        Getting start
      </button>
      <div className="shadow-xl overflow-hidden lg:flex md:flex hidden">
        <Image
          src={"/assets/images/demo1.png"}
          width={700}
          height={700}
          alt="demo-img1"
        ></Image>
      </div>
    </div>
  );
};

export default Login;
