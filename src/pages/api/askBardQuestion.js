import vertexAiQuery from "@/lib/vertexAiQueryApi";
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
  
  // modify to get the return data from vertexAiQuery
  const response = await vertexAiQuery(prompt, chatId, model);
  
  // after vertex ai response
  const message = {
    text: response || "Bard cannot find the answer for that!",
    createAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "assistant",
      name: "Bard",
      avatar: "/assets/images/icons8-google.svg",
    },
  };

  // save result to firebase
  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);
  res.status(200).json({ answer: message.text });
}

export default handler;