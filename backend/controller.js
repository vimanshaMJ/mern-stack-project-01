const User = require("./model");

const getUsers = (req, res, next) => {
  User.find() // find is equal to SELECT on sql, return a promise. We can access to a response & error by a promise
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const addUser = (req, res, next) => {
  const user = new User({
    id: req.body.id,
    name: req.body.name,
  });
  user
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const updateUser = (req, res, next) => {
  // const id = req.body.id;
  // const name = req.body.name;  both are in one line:
  const { id, name } = req.body;
  User.updateOne({ id: id }, { $set: { name: name } })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const deleteUser = (rew, res, next) => {
  const id = req.body.id;
  User.deleteOne({ id: id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
