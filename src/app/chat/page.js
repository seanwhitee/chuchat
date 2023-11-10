import React from "react";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";


const cardData = [
  {
    title: "Instant Messaging Excellence",
    content:
      `Experience lightning-fast and reliable instant messaging with ChuChat. 
      Send messages instantly, keeping your conversations smooth and real-time. 
      `,
  },
  {
    title: "Intelligent Chatbots at Your Service",
    content: `
    Meet our intelligent chatbots, designed to enhance your chat experience. From answering queries to providing
    personalized recommendations, our smart chatbots are here to assist you 24/7.
    `
  },
  {
    title: "User-Friendly Interface, Ultimate Convenience",
    content: `
    ChuChat's intuitive and user-friendly interface ensures that everyone can navigate with ease. 
    Enjoy ultimate convenience with organized chat rooms, easy-to-use tools. 
    Your chat experience just got simpler and more enjoyable.
    `
  },
];
export default function Page() {
  
  return (
    <>
    <div className="mx-auto flex flex-col bg-black items-center justify-center">
      <h2 className=" lg:text-5xl md:text-3xl sm:text-3xl font-bold text-white">Hello</h2>
      <div className="lg:flex md:flex items-center justify-center">
        {cardData.map((data) => {
          return (
            <Card key={data.title} title={data.title} content={data.content} />
          );
        })}
      </div>
      
    </div>
    {/**Sidebar for selected chatrooms */}
    <Sidebar />
    </>
  );
};
