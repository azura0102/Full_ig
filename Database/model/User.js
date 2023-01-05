import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname bich!"],
    minlenght: [1, "Zuv2"],
    maxlenght: [44, "Arail urt"],
  },
  lastname: {
    type: String,
    required: true,
  },
  age: Number,
  image: String,
  gender: {
    type: String,
    enum: {
      values: ["Male", "Female", "Undefined"],
      message: "Not supported",
    },
  },
});
UserSchema.path("firstname").validate((firstname) => {
  return !/[0-9]/.test(firstname);
}, "Neren dund too orj bolku");

// PostSchema.path("email").validate((email) => {
//   return email.toLowerCase().match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
// });
const User = mongoose.model("User", UserSchema);
export default User;
