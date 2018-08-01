const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('unable to connect to MongoDb');
  }
  console.log('connected to MongoDb' );
  const db = client.db('TodoApp')

  db.collection('User').findOneAndUpdate(
    {_id: new ObjectID('5b5de4f100819ae6b52f668b')},
  {
    $set: {
      name: 'David'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })
  // client.close();

})
