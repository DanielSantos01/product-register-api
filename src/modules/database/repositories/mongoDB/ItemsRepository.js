// TODO - Create only if don't exist the passed name for the ownerId

const ItemModel = require('./models/Item');

class ItemsRepository {
  constructor() {
    this.update = this.update.bind(this);
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }

  create(creationData) {
    const {
      name, price, quantity, ownerId, resolve,
    } = creationData;

    ItemModel.create({
      name,
      price,
      quantity,
      ownerId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).then(() => {
      this.getAall({ ownerId, resolve });
    });
  }

  delete(deleteData) {
    const { ownerId, id, resolve } = deleteData;
    ItemModel.findByIdAndDelete(id).exec().then(() => {
      this.getAall({ ownerId, resolve });
    });
  }

  getAall(findData) {
    const { ownerId, resolve } = findData;
    ItemModel.find({ ownerId }).exec().then((result) => resolve(result));
  }

  findById(findData) {
    const { id, resolve } = findData;
    ItemModel.findById(id).exec().then((result) => resolve(result));
  }

  update(updateData) {
    const { id, updateParams, resolve } = updateData;

    ItemModel.findByIdAndUpdate(
      id,
      { ...updateParams, updatedAt: new Date() },
      { new: true },
    ).exec().then(((result) => {
      const { ownerId } = result;
      this.getAall({ ownerId, resolve });
    }));
  }
}

module.exports = ItemsRepository;
