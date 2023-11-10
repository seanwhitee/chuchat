import mongoose, { mongo } from "mongoose";

const promptSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  chatroomId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Chatroom",
  },
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  responses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Response",
    },
  ],
});

const Prompt =
  mongoose.Schema.Prompt || mongoose.Schema("Prompt", promptSchema);

export default Prompt;
