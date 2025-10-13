import mongoose, { Schema } from "mongoose";
const likeSchema = new Schema(
  {
    //either "Video","Comment", or tweet will be assigned others null
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    Comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
    tweet: {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
    },
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);


export const Like = mongoose.model("Like",likeSchema)