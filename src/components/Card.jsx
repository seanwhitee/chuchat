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
    <div className=" bg-gray-900 h-[178px] overflow-scroll p-3 m-10 w-64 border border-solid border-gray-700 rounded-lg shadow-lg">
      <h2 className=" text-white text-xs font-bold lg:text-lg">{props.title}</h2>
      <p className="text-white text-xs">{props.content}</p>
    </div>
  );
};

export default Card;
