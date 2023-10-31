import React from "react";

/**
 * 
 * @param {*} props 
 * 						Card title: string
 * 						Card content: string
 * @returns 
 */
const Card = (props) => {
  return <div className=" h-[178px] p-3 m-10 w-64 border border-solid border-black rounded-lg shadow-md">
		<h2 className=" text-xs font-bold lg:text-lg">{props.title}</h2>
		<p className="text-xs">{props.content}</p>
	</div>;
};

export default Card;
