import Navbar from "@/components/Navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center mt-10">
      <SignIn />
    </div>
    </>
  );
}
