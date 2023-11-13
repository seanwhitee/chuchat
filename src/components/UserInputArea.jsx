"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../../firebase";

const UserInputArea = ({chatId}) => {
  
  const {data: session} = useSession();  
  const [prompt, setPrompt] = useState("");

  // TODO: use swr to get model
  const model = 'text-davinci-003'

  const sendMessage = async(e) => {
    e.preventDefault()
    if(!prompt) return;
    try {
      const input = prompt.trim()
      setPrompt("")
      
      const message = {
        text: input,
        createAt: serverTimestamp(),
        user: {
          _id: session?.user?.email,
          name: session?.user?.name,
          avatar: session?.user?.image ||`https://ui-avatars.com/api/?name=${session?.user?.name}`
        }
      }
      
      await addDoc(collection(db, 'users', session?.user?.email, 'chats', chatId, 'messages'), {
        message
      })
      
      // Toast notification
      const notification = toast.loading('ChuChat is thinking...')

      await fetch('/api/askQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',       
        },
        body: JSON.stringify({
          prompt: input,
          chatId,
          model,
          session
        }).then(()=>{
          // Toast notification to say successful
          toast.success('ChuChat has responded!', {
            id: notification
          })
        })
      })

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="bg-gray-800 rounded-lg p-2 shadow-lg w-3/5">
      <form action="" className="flex items-center px-2"
        onSubmit={sendMessage}
        >
        {/**dynamically update the textarea height based on the user input */}
        <textarea
          name="user-input-area"
          id="user-input-area"
          onChange={(e)=>{
            setPrompt(e.target.value)
          }}
          value={prompt}
          disabled={!session}
          rows={1}
          placeholder="send message"
          className="border-none outline-none resize-none bg-purple-white bg-gray-800
            disabled:cursor-not-allowed bg-transparent disabled:text-gray-300 py-2 px-1 rounded-md w-full text-white me-3"
        ></textarea>
        <div className="">
          <button
            type="submit" className=" bg-gray-300/50 rounded-lg hover:opacity-50 p-1"
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
