const ItemModel = require('./models/Item');

class ItemsRepository {
  constructor() {
    this.update = this.update.bind(this);
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(creationData) {
    const { ownerId, name } = creationData;
    try {
      const item = await this.find({ ownerId, name });
      if (item?.length) {
        return 'Item already registred';
      }

      await ItemModel.create({
        ...creationData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const response = await this.getAll({ ownerId });
      return response;
    } catch (err) {
      return err;
    }
  }

  async delete(deleteData) {
    const { ownerId, id } = deleteData;
    try {
      await ItemModel.findByIdAndDelete(id).exec();
      const response = await this.getAll({ ownerId });
      return response;
    } catch (err) {
      return err;
    }
  }

  async getAll(findData) {
    const { ownerId } = findData;
    try {
      const response = await ItemModel.find({ ownerId }).exec();
      return response;
    } catch (err) {
      return err;
    }
  }

  async findById(findData) {
    const { id } = findData;
    try {
      const response = await ItemModel.findById(id).exec();
      return response;
    } catch (err) {
      return err;
    }
  }

  async update(updateData) {
    const { id, updateParams } = updateData;
    try {
      const { ownerId } = await ItemModel.findByIdAndUpdate(
        id,
        { ...updateParams, updatedAt: new Date() },
        { new: true },
      ).exec();

      const response = await this.getAll({ ownerId });
      return response;
    } catch (err) {
      return err;
    }
  }

  // CURRENTELY USED JUST ON THE SERVER TO CHECK ITEM EXISTENCE
  async find(findData) {
    try {
      const response = await ItemModel.find(findData).exec();
      return response;
    } catch (err) {
      return '';
    }
  }
}

module.exports = ItemsRepository;
