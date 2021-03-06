const UserHelper = require('../modules/database/adapters/Users');

exports.create = async (req, res) => {
  const createParams = { ...req.body };
  const createResponse = await UserHelper.create(createParams);
  res.send(createResponse);
};

exports.acess = async (req, res) => {
  if (!Object.keys(req.body).length) {
    res.status(400).send({ message: 'user data is required' });
    return;
  }
  const acessData = { ...req.body };
  const acessResponse = await UserHelper.find(acessData);
  res.send(acessResponse);
};

exports.exists = async (req, res) => {
  const dataToCheck = { ...req.body };
  const existsResponse = await UserHelper.find(dataToCheck);
  res.send(!!existsResponse?.length);
};

exports.update = async (req, res) => {
  const { id, ...rest } = req.body;
  const updateResponse = await UserHelper.update({ userId: id, updateParams: rest });
  res.send(updateResponse);
};

exports.findById = async (req, res) => {
  const { id } = req.query;
  const findResponse = await UserHelper.findById({ userId: id });
  res.send(findResponse);
};

exports.getPosition = async (req, res) => {
  const { id } = req.query;
  const positionResponse = await UserHelper.findPosition({ _id: id });
  res.send(positionResponse);
};
