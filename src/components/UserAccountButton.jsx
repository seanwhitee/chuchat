"use client";
import React, {useState} from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import UserAccountMenu from "./UserAccountMenu";

const UserAccountButton = () => {
  const { user, isSignedIn, isLoaded } = useUser();
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	}
  return (
    <>
		{isClicked && (
			<UserAccountMenu />
		)}
      <div>
        {isSignedIn && (
          <Image
            src={user.imageUrl}
            alt="user image"
            width={45}
            height={45}
            className=" hover:border-gray-400 me-2 border-2 border-gray-700"
						onClick={handleClick}
						
          ></Image>
        )}
      </div>
    </>
  );
};

export default UserAccountButton;
