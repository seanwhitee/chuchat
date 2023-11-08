import { SignUp } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center mt-10">
      <SignUp />
    </div>
    </>
  );
}
