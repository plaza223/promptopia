import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Already exists!"],
    required: [true, "Required"],
  },
  username: {
    type: String,

    required: [true, "Required"],
    match: [
      /^.{8,20}$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
