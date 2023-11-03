import React from "react";
import InputArea from "@/components/UserInputArea";
import UserInputArea from "@/components/UserInputArea";

const page = () => {
  return (

    <div className="mx-auto flex flex-col w-10/12 bg-gray-200 items-center justify-between py-5">
      {/**chat message area */}
      <div className="flex flex-col overflow-hidden bg-gray-200 h-5/6 mb-2 w-10/12 px-5 py-3">hello</div>
  
      {/**user promting */}
      
      <UserInputArea/>

  
      
    </div>

  );
};

export default page;
