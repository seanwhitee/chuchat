import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChuChat",
  description:
    "A chat application that integrates three chatbot api to provide a better solution for user reference.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`} >
          <main className="mx-auto min-w-max">
            
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
