import { Inter } from "next/font/google";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import "./globals.css";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChuChat",
  description:
    "A chat application that integrates three chatbot api to provide a better solution for user reference.",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>
          <main className="mx-auto min-w-max bg-white h-screen">
            <ClientProvider />
            {children}
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
