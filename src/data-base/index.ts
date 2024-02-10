import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/next_discord_dashboard")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
