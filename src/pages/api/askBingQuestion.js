import { BingChat } from "bing-chat";
import admin from "firebase-admin";
import { adminDb } from "../../../firebaseAdmin";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

const handler = async (req, res) => {
  const { prompt, chatId, model } = req.body;

  const session = await getServerSession(req, res, authOptions);

  // Prevent user outside application ues our api.

  if (!session.user) {
    res.status(400).json({ answer: "Not authenticated." });
  }
  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt." });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a chat id." });
  }

  // get response
  const api = new BingChat({
    cookie: process.env.BING_COOKIE,
  });

  const response = await api.sendMessage(prompt);
  console.log("test: ", response.text)

  const message = {
    text: response.text || "Bing cannot find the answer for that!",
    createAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "assistant",
      name: "Bing",
      avatar: "/assets/images/icons8-bing.svg",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);
  res.status(200).json({ answer: message.text });
};

export default handler;
