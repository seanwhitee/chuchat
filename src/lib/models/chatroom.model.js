import mongoose from "mongoose";

const chatroomSchema = mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	},
  name: {
    type: String,
    required: true,
  },
	createAt: {
		type: Date,
		default: Date.now,
	},
  prompts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prompt",
    },
  ],
});

const Chatroom = mongoose.model.Chatroom || mongoose.Schema("Chatroom", chatroomSchema)

export default Chatroom
