const db = require('../utils/db')

class UserModel {
  constructor() {
    this.userModel = db.model('users', {
      username: String,
      password: String
    })
  }

  save(data) {
    let users = new this.userModel(data)
    return users.save()
  }

  select(data) {
    return this.userModel.findOne({username: data.username})
  }
}

module.exports = new UserModel()
// const userModel = {
//     _init(){
//         this.UserModel= db.model('users',{
//             username: String,
//             password: String
//         })
//     },
// save(data) {
//     const users = new this.UserModel(data);
//     return users.save();
// }

// }

// userModel._init();
// module.exports = userModel;