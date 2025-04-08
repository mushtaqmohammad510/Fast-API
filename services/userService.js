// services/userService.js
const userData = require("../data/userData");

const getAllUsers = () => {
  return userData.getAllUsers();
};

const getUserById = (id) => {
  const user = userData.getUserById(id);
  if (!user) throw new Error("User not found");
  return user;
};

const createUser = (user) => {
  if (!user.name || !user.email) throw new Error("Name and email are required");
  return userData.createUser(user);
};

const updateUser = (id, user) => {
  const updatedUser = userData.updateUser(id, user);
  if (!updatedUser) throw new Error("User not found");
  return updatedUser;
};

const deleteUser = (id) => {
  const deletedUser = userData.deleteUser(id);
  if (!deletedUser) throw new Error("User not found");
  return deletedUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
