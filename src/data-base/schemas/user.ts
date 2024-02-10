import mongoose, { Schema } from "mongoose";

export interface User {
  id: string;
  discordId: string;
  accessToken: string;
  refreshToken: string;
}

const userSchema = new Schema<User>({
  discordId: {
    type: String,
    required: true,
    unique: true,
  },
  accessToken: {
    type: String,
    required: true,
    unique: true,
  },
  refreshToken: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Users", userSchema);
