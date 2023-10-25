import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

export default function Home() {
  const {userId} = auth();

  if (userId) {
    redirect(`/chat/${userId}`)
  }
  return (
    <>
      {/**hero section */}
      <section className="flex border-2 justify-center border-white lg:p-10">
        <div className="px-5">
          <div className="flex-col px-0 md:px-20 py-24 ">
            <div className="flex align-center">
              <p className="text-sm pe-1">Chat Beyond Limits:</p>
              <Image
                src="assets/icons/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="mb-10">
              <h1 className="font-bold lg:text-4xl md:text-4xl text-sm">
                <p>
                  Elevate Your Conversations with  
                  <span className=" text-purple-600"> Triple</span> the Insight!
                  
                </p>
                <p>
                  <span className="text-purple-600">Empowering Your Conversations.</span>
                </p>
              </h1>
            </div>
            <div>
              <p className="text-sm">Stay Ahead, and Chat Beyond Limits.</p>
            </div>

            
          </div>
          <div className="sm:mx-10 sm:mb-10 flex justify-center">
          </div>
        </div>
      </section>
    </>
  );
}
