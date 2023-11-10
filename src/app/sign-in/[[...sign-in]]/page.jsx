import Navbar from "@/components/Navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
    <Navbar />
    <div className="flex items-start justify-center pt-10 bg-black h-screen">
      <SignIn />
    </div>
    </>
  );
}
