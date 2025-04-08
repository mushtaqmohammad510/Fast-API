// data/userData.js
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const getAllUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const createUser = (user) => {
  const newUser = { id: users.length + 1, ...user };
  users.push(newUser);
  return newUser;
};

const updateUser = (id, updatedUser) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { id, ...updatedUser };
    return users[index];
  }
  return null;
};

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return null;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
