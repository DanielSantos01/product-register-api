const ItemHelper = require('../modules/database/adapters/Items');

exports.create = (req, res) => {
  const {
    name, price, quantity, ownerId,
  } = req.body;

  const resolve = (result) => res.send(result);
  ItemHelper.create({
    name,
    price,
    quantity,
    ownerId,
    resolve,
  });
};

exports.getAll = (req, res) => {
  const { ownerId } = req.body;

  const resolve = (result) => {
    const hasResult = !!result.length;
    res.send(hasResult ? result : '');
  };

  ItemHelper.getAall({ ownerId, resolve });
};

exports.update = (req, res) => {
  const { id, ...rest } = req.body;

  const resolve = (result) => res.send(result);
  ItemHelper.update({ id, updateParams: rest, resolve });
};

exports.delete = (req, res) => {
  const { id, ownerId } = req.body;

  const resolve = (result) => res.send(result);
  ItemHelper.delete({ id, ownerId, resolve });
};

exports.findById = (req, res) => {
  const { id } = req.body;

  const resolve = (result) => res.send(result);
  ItemHelper.findById({ id, resolve });
};
