const ItemHelper = require('../modules/database/adapters/Items');

exports.create = async (req, res) => {
  const createParams = { ...req.body };
  const createResponse = await ItemHelper.create(createParams);
  res.send(createResponse);
};

exports.getAll = async (req, res) => {
  const { ownerId } = req.query;
  const queryResponse = await ItemHelper.getAll({ ownerId });
  res.send(queryResponse);
};

exports.update = async (req, res) => {
  const { id, ...rest } = req.body;
  const updateResponse = await ItemHelper.update({ id, updateParams: rest });
  res.send(updateResponse);
};

exports.delete = async (req, res) => {
  const { id, ownerId } = req.query;
  const deleteResponse = await ItemHelper.delete({ id, ownerId });
  res.send(deleteResponse);
};

exports.findById = async (req, res) => {
  const { id } = req.query;
  const findResponse = await ItemHelper.findById({ id });
  res.send(findResponse);
};
