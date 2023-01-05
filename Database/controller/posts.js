import Post from "../model/Post.js";
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send({
      Post: posts,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const createPosts = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const getPostsByID = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deletePosts = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.deleteOne({ _id: id });
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
