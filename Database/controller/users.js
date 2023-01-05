import User from "../model/User.js";
export const getAllusers = async (req, res) => {
  const users = await User.find({}); //buh useriig avj bn
  if (!users) throw new Error("Not found", 400);
  res.send({
    data: users,
  });
};

export const createUsers = async (req, res) => {
  const user = await User.create(req.body);
  if (!user) throw new Error("Haraaal oidsn error", 400);
  res.send({
    data: user,
  });
};
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const UserById = await User.findById(id);
    res.status(200).send({
      success: true,
      data: UserById,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deleteUserById = async (req, res) => {
  const id = req.params.id;
  await User.deleteOne({ _id: id });
  res.send("Deleted");
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
