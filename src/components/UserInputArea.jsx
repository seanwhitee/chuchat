"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../../firebase";

const UserInputArea = ({ chatId }) => {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!prompt) return;
    try {
      const input = prompt.trim();
      setPrompt("");

      const message = {
        text: input,
        createAt: serverTimestamp(),
        user: {
          _id: session?.user?.email,
          name: session?.user?.name,
          avatar:
            session?.user?.image ||
            `https://ui-avatars.com/api/?name=${session?.user?.name}`,
        },
      };

      await addDoc(
        collection(
          db,
          "users",
          session?.user?.email,
          "chats",
          chatId,
          "messages"
        ),

        message
      );

      // calling openai api
      const gptNotification = toast.loading("GPT is thinking...");

      await fetch("/api/askGptQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          chatId,
          model: "gpt-3.5-turbo",
        }),
      }).then(() => {
        // Toast notification to say successful
        toast.success("GPT has responded!", {
          id: gptNotification,
        });
      });

      // calling google vertexAI api
      const vertexAiNotification = toast.loading("Bard is thinking...");

      await fetch("/api/askBardQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          chatId,
          model: "chat-bison@001",
        }),
      }).then(() => {
        // Toast notification to say successful
        toast.success("Bard has responded!", {
          id: vertexAiNotification,
        });
      });
      // // Still in testing.
      // // calling unformal bing chat api
      // const bingChatNotification = toast.loading("Bing is thinking...");

      // await fetch("/api/askBingQuestion", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     prompt: input,
      //     chatId,
      //     model: "",
      //   }),
      // }).then(() => {
      //   // Toast notification to say successful
      //   toast.success("Bing has responded!", {
      //     id: bingChatNotification,
      //   });
      // });

      // [end of all api calling]
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white border-[1px] border-black/50 rounded-xl p-2 shadow-lg w-7/12">
      <form action="" className="flex items-center px-2" onSubmit={sendMessage}>
        {/**dynamically update the textarea height based on the user input */}
        <textarea
          name="user-input-area"
          id="user-input-area"
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          value={prompt}
          disabled={!session}
          rows={1}
          placeholder="Message ChuChat..."
          className="border-none outline-none resize-none bg-purple-white bg-gray-800
            disabled:cursor-not-allowed bg-transparent disabled:text-gray-300 py-2 px-1 rounded-md w-full text-black me-3"
        ></textarea>
        <div className="">
          <button
            type="submit"
            className=" bg-gray-300/50 rounded-lg hover:bg-green-300 hover:opacity-50 p-1"
            disabled={!session || !prompt}
          >
            <Image
              src={"/assets/icons/submit-button.svg"}
              alt="submit-button"
              width={30}
              height={30}
            ></Image>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInputArea;
