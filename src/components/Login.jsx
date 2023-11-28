"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Tilt from "react-parallax-tilt";

const Login = () => {
  return (
    <>
      <Navbar />
      {/**hero section */}

      <div className="flex lg:flex-row md:flex-col flex-col items-center justify-center h-screen">
        <div className="flex justify-start flex-col lg:me-20">
          <div className=" lg:text-3xl md:text-5xl text-2xl p-1 text-justify">
            <p>Elevate Your Conversation</p>
            <p>
              with<span className=" text-purple-600"> Double</span> Insight!
            </p>
          </div>

          <div className="mb-10">
            <p className="text-sm">Stay Ahead, and Chat Beyond Limits.</p>
          </div>
        </div>
        <Tilt>
          <div className=" lg:w-[550px] md:w-[550px] w-[330px]">
            <Image
              src={"/assets/images/demo1.png"}
              width={550}
              height={550}
              alt="demo-img1"
              className="shadow-xl"
            ></Image>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default Login;
