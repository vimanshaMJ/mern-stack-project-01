const users = [
  { id: 1, name: "Vimansha" },
  { id: 2, name: "Gihan" },
];

// controller funtions to return above data , (cb - callback function)
const getUsers = (cb) => {
  cb(users);
};

const getUsersById = (id, cb) => {
  const user = users.find((user) => user.id == id);
  cb(user);
};

exports.getUsers = getUsers;
exports.getUsersById = getUsersById;
