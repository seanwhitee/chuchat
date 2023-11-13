import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

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

export default async function Home() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center bg-black">
        <section className="flex flex-col text-white justify-center lg:p-10">
          <div className="px-5">
            <div className="flex-col px-0 md:px-20 pt-24 pb-10">
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
                <h1 className="font-bold lg:text-4xl md:text-xl text-sm">
                  <p>
                    Elevate Your Conversations with
                    <span className=" text-purple-500"> Triple</span> the
                    Insight!
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
        <section className=" bg-black lg:flex ">
          {cardData.map((data) => {
            return (
              <Card
                key={data.title}
                title={data.title}
                content={data.content}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}
