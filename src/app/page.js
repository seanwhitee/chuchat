import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";

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
  const session = await getServerSession(authOptions);
  return (
    <>
      {!session && <Login />}
      {session && (
        <>
          <div className="flex flex-col h-full bg-black">
            <div className="flex h-full items-center">
              <div className="mx-auto flex flex-col bg-black items-center justify-center">
                <div className="bg-black lg:flex">
                  {cardData.map((data) => {
                    return (
                      <Card
                        key={data.title}
                        title={data.title}
                        content={data.content}
                      />
                    );
                  })}
                </div>
              </div>
              <Sidebar />
            </div>
          </div>
        </>
      )}
    </>
  );
}
