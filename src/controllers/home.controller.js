const UsersAdapter = require('../modules/database/adapters/Users');

exports.getController = (req, res) => {
  res.render('index');
};

exports.postController = (req, res) => {
  res.send(req);
  // UsersAdapter.createUser({ ...req.body, resolve });
};
