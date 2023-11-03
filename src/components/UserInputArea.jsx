import React from "react";
import Image from "next/image";

const UserInputArea = () => {
  return (
    <div className="bg-gray-600 rounded-lg p-2 w-3/4 fixed bottom-3">
      <form action="" className="flex items-center px-2">
        <textarea
          name="user-input-area"
          id="user-input-area"
          cols="30"
          rows="1"
          placeholder="send message"
          className=" resize-none bg-gray-600 py-2 px-1 rounded-md w-full text-white me-3"
        ></textarea>
        <button type="submit" className=" bg-green-200 rounded-md p-1">
          <Image
            src={"/assets/icons/submit-button.svg"}
            alt="submit-button"
            width={30}
            height={30}
            
          ></Image>
        </button>
      </form>
    </div>
  );
};

export default UserInputArea;
