import { SignUp } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
    <Navbar />
    <div className="flex items-start justify-center pt-10 bg-black h-screen">
      <SignUp />
    </div>
    </>
  );
}
