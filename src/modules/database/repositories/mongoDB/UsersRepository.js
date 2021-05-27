const UserModel = require('./models/User');

class UsersRepository {
  constructor() {
    this.create = this.create.bind(this);
  }

  create(creationData) {
    const {
      login, password, role, resolve, name,
    } = creationData;

    UserModel.create({
      login,
      password,
      role,
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).then((result) => resolve(result));
  }

  find(findData) {
    const { login, password, resolve } = findData;
    UserModel.find({ login, password }).exec().then((result) => resolve(result));
  }

  findById(findData) {
    const { userId, resolve } = findData;
    UserModel.findById(userId).exec().then((result) => resolve(result));
  }

  update(updateData) {
    const { userId, updateParams, resolve } = updateData;

    UserModel.findByIdAndUpdate(
      userId,
      { ...updateParams, updatedAt: new Date() },
      { new: true },
    ).exec().then(((result) => resolve(result)));
  }
}

module.exports = UsersRepository;
