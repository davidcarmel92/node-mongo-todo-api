const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'example@gmail.com',
  password: 'abc123',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: userTwoId,
  email: 'example2@gmail.com',
  password: 'abc123',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}]

const todos = [
  {
    text: '1st test todo',
    _id: new ObjectID(),
    _creator: userOneId
  },
  {
    text: '2nd test todo',
    _id: new ObjectID(),
    completed: true,
    completedAt: 333,
    _creator: userTwoId
  }];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos)
  }).then(() => done());
}

const populateUsers = (done) => {
  User.remove({}).then(() => {
    const userOne = new User(users[0]).save()
    const userTwo = new User(users[1]).save()

    return Promise.all([userOne, userTwo])
  }).then(() => done());
}


module.exports = {
  todos,
  populateTodos,
  users,
  populateUsers
}
