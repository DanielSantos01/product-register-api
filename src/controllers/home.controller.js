const UsersAdapter = require('../modules/database/adapters/Users');

exports.getController = (req, res) => {
  res.render('index');
};

exports.postController = (req, res) => {
  res.send(req.body);
  // UsersAdapter.createUser({ ...req.body, resolve });
};
