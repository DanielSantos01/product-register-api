const UserModel = require('./models/User');

class UsersRepository {
  constructor() {
    this.createUser = this.createUser.bind(this);
  }

  createUser(creationData) {
    const {
      login, password, role, resolve,
    } = creationData;

    UserModel.create({
      login,
      password,
      role,
    }).then((result) => resolve(result));
  }

  findUser(findData) {
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
      updateParams,
      { new: true },
    ).exec().then(((result) => resolve(result)));
  }
}

module.exports = UsersRepository;
