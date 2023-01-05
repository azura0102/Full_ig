import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  desc: String,

  bgimage: {
    type: String,
    required: [true, "Zurag hii!"],
  },

  likes: {
    type: String,
    required: [true, "Like husehgu bgamu"],
  },
  image: String,
  name: {
    type: String,
    required: [true, "Ner hel"],
    minlength: [5, "Baga bn"],
  },
});
PostSchema.path("name").validate((name) => {
  return !/[0-9]/.test(name);
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
