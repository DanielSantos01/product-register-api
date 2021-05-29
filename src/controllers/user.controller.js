const UserHelper = require('../modules/database/adapters/Users');

exports.create = (req, res) => {
  const {
    password, login, role, name,
  } = req.body;

  const resolve = (result) => res.send(result);
  UserHelper.create({
    login,
    password,
    role,
    resolve,
    name,
  });
};

exports.acess = (req, res) => {
  const { password, login } = req.query;

  const resolve = (result) => {
    const hasResult = !!result.length;
    res.send(hasResult ? result : '');
  };

  UserHelper.find({ login, password, resolve });
};

exports.update = (req, res) => {
  const { id, ...rest } = req.body;

  const resolve = (result) => res.send(result);
  UserHelper.update({ userId: id, updateParams: rest, resolve });
};

exports.findById = (req, res) => {
  const { id } = req.query;

  const resolve = (result) => res.send(result);
  UserHelper.findById({ userId: id, resolve });
};
