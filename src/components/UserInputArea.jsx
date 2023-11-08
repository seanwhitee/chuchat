"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const UserInputArea = () => {
  {
    /**unfinished?????????? */
  }
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState(1);

  // max row num
  const maxRowNum = 8;

  const handleInputChange = (event) => {
    setMessage(event.target.value);

    // Calculate the number of rows based on the content and textarea width
    const textareaLineHeight = 40; // Adjust this value based on your font size and line height

    let numberOfLines = Math.floor(
      event.target.scrollHeight / textareaLineHeight
    );
    if (numberOfLines >= maxRowNum) {
      numberOfLines = maxRowNum;
    }
    setRows(numberOfLines > 1 ? numberOfLines : 1);
  };

  return (
    <div className="bg-white rounded-lg p-2 shadow-lg w-4/5">
      <form action="" className="flex items-center px-2">
        {/**dynamically update the textarea height based on the user input */}
        <textarea
          name="user-input-area"
          id="user-input-area"
          value={message}
          onChange={handleInputChange}
          rows={rows}
          placeholder="send message"
          className="border-none outline-none resize-none bg-purple-white py-2 px-1 rounded-md w-full text-black me-3"
        ></textarea>
        <div className="">
          <button type="submit" className=" bg-green-200 rounded-md p-1">
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
