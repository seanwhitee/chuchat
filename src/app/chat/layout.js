import Link from "next/link";

export default function ChatLayout({ children }) {
  return (
    <div className="flex flex-col h-full bg-black">
      
        <div className=" flex h-full items-center">
        {children}
        </div>

    </div>
  );
}
