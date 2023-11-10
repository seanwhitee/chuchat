"use client";

import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Link from "next/link";

/**
 * Home(Landing) page
 * @returns
 */
const cardData = [
  {
    title: "Instant Messaging Excellence",
    content: `Experience lightning-fast and reliable instant messaging with ChuChat. 
      Send messages instantly, keeping your conversations smooth and real-time. 
      `,
  },
  {
    title: "Intelligent Chatbots at Your Service",
    content: `
    Meet our intelligent chatbots, designed to enhance your chat experience. From answering queries to providing
    personalized recommendations, our smart chatbots are here to assist you 24/7.
    `,
  },
  {
    title: "User-Friendly Interface, Ultimate Convenience",
    content: `
    ChuChat's intuitive and user-friendly interface ensures that everyone can navigate with ease. 
    Enjoy ultimate convenience with organized chat rooms, easy-to-use tools. 
    Your chat experience just got simpler and more enjoyable.
    `,
  },
];

export default function Home() {
  const { user, isSignedIn } = useUser();
  if (isSignedIn) {
    const userId = user.id;
    const userEmail = user.emailAddresses[0].emailAddress;
    const createAt = user.createdAt
    {
      /**insert into chuchat db User table */
    }
    
    redirect(`/chat`);
  }
  return (
    <>
      <Navbar />
      {/** user not authenticated */}
      {!isSignedIn && (
        <div className="fixed top-4 right-4">
          <Link href={"sign-in"}>
            <button>
              <p className=" bg-purple-500 text-white hover:bg-purple-300 shadow-lg p-2 rounded-md">
                Getting Start
              </p>
            </button>
          </Link>
        </div>
      )}
      {/**hero section */}
      <section className="flex bg-black text-white justify-center border-white lg:p-10">
        <div className="px-5">
          <div className="flex-col px-0 md:px-20 py-24 ">
            <div className="flex align-center">
              <p className="text-sm pe-1">Chat Beyond Limits:</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="mb-10">
              <h1 className="font-bold lg:text-4xl md:text-4xl text-sm">
                <p>
                  Elevate Your Conversations with
                  <span className=" text-purple-500"> Triple</span> the Insight!
                </p>
                <p>
                  <span className="text-purple-500">
                    Empowering Your Conversations.
                  </span>
                </p>
              </h1>
            </div>
            <div>
              <p className="text-sm">Stay Ahead, and Chat Beyond Limits.</p>
            </div>
          </div>
          <div className="sm:mx-10 sm:mb-10 flex justify-center"></div>
        </div>
      </section>
      {/**Card */}
      <section className="lg:flex bg-black md:flex items-center justify-center py-2">
        {cardData.map((data) => {
          return (
            <Card key={data.title} title={data.title} content={data.content} />
          );
        })}
      </section>
    </>
  );
}
