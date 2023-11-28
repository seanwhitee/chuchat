import React from "react";

/**
 *
 * @param {*} props
 * 						Card title: string
 * 						Card content: string
 * @returns
 */
const Card = (props) => {
  return (
    <div className=" bg-white h-[200px] overflow-scroll p-3 mx-5 my-10 w-64 border border-solid border-gray-700 rounded-lg shadow-lg">
      <h2 className=" text-black text-md font-bold mb-3">{props.title}</h2>
      <p className="text-black text-xs">{props.content}</p>
    </div>
  );
};

export default Card;
