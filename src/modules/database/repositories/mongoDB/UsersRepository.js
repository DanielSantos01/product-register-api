const UserModel = require('./models/User');

class UsersRepository {
  createUser(creationData) {
    const { name, role, resolve } = creationData;
    resolve({ name, role });
    UserModel.create({
      name,
      role
    }).then(result => resolve(result));
  }
};

module.exports = UsersRepository;
