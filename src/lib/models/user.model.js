import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  chatrooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chatroom",
    },
  ],
  
});


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
