const UsersAdapter = require('../modules/database/adapters/Users');

exports.getController = (req, res) => {
  res.render('index');
};

exports.postController = (req, res) => {
  const { name, role } = req.body;
  const resolve = (users) => res.send(users);
  UsersAdapter.createUser({ name, role, resolve });
};
