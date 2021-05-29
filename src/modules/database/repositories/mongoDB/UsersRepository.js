const UserModel = require('./models/User');

class UsersRepository {
  constructor() {
    this.create = this.create.bind(this);
  }

  async create(creationData) {
    try {
      const { login, password } = creationData;
      const someUser = await this.find({ login, password });

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
}

module.exports = UsersRepository;
