import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function ChatLayout({ children }) {
  return (
    <div className="h-full flex-col">
			
      <div className="bg-purple-400 py-3 text-center">
        <Link href={"/"}>
          <h1 className=" text-white text-3xl font-bold">
            <span className=" text-purple-900">Chu</span>Chat
          </h1>
        </Link>
      </div>
			<div className="flex h-full">
      <Sidebar />
			
			{children}
			</div>
    </div>
  );
}
