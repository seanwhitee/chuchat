import React from 'react'
import { SignOutButton, useClerk } from '@clerk/nextjs'

const UserAccountMenu = () => {
    const {signOut} = useClerk();
  return (
    <div className=' absolute bottom-16 bg-gray-700 overflow-scroll w-48 rounded-md flex flex-col items-start px-1 py-1 justify-start text-white'>
        <div className='hover:bg-purple-500 w-full bg-gray-600 rounded-md px-2 py-1'>
        <SignOutButton />
        </div>
    </div>
  )
}

export default UserAccountMenu