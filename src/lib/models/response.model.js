import mongoose from "mongoose";

const responseSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  promptId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Prompt",
  },
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Response = mongoose.Schema.Response || mongoose.Schema("Response", responseSchema)

export default Response