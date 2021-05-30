/* eslint-disable no-underscore-dangle */
const UserModel = require('./models/User');

class UsersRepository {
  constructor() {
    this.create = this.create.bind(this);
    this.findPosition = this.findPosition.bind(this);
  }

  async create(creationData) {
    try {
      const { login } = creationData;
      const someUser = await this.find({ login });

      if (someUser?.length) {
        return 'user already registred';
      }
      const response = await UserModel.create({
        ...creationData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return response;
    } catch (err) {
      return err;
    }
  }

  async find(findData) {
    try {
      const response = await UserModel.find(findData).exec();
      return response;
    } catch (err) {
      return '';
    }
  }

  async findById(findData) {
    const { userId } = findData;
    try {
      const response = await UserModel.findById(userId).exec();
      return response;
    } catch (err) {
      return err;
    }
  }

  async update(updateData) {
    const { userId, updateParams } = updateData;

    try {
      const response = await UserModel.findByIdAndUpdate(
        userId,
        { ...updateParams, updatedAt: new Date() },
        { new: true },
      ).exec();
      return response;
    } catch (err) {
      return err;
    }
  }

  /**
   * Gets all registred users and check the passed _id position in the Array
   * @param {@type {_id} } findParams
   * @returns -1 if occur an error/the user dont't exists, or other a positive
   * number representing the user index in the database
   */
  async findPosition(findParams) {
    const { _id } = findParams;
    try {
      const queryResponse = await this.getAll(findParams);
      const userPosition = queryResponse.reduce((acc, curr, index) => {
        if (curr._id.toString() !== _id) return acc;
        return index;
      }, -1);
      return `${userPosition}`;
    } catch (err) {
      return '-1';
    }
  }

  /**
   * Used locally only!
   * Purpose: Query the user position in the database
   * @returns All registred users in an Array
   */
  async getAll() {
    try {
      const response = await UserModel.find().exec();
      return response;
    } catch (err) {
      return [];
    }
  }
}

module.exports = UsersRepository;
