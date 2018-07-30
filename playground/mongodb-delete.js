const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('unable to connect to MongoDb');
  }
  console.log('connected to MongoDb' );
  const db = client.db('TodoApp')

  db.collection('User').findOneAndDelete({_id: new ObjectID('5b5e8e0800819ae6b52f8c91')}).then((result) => {
    console.log(result)
  })
  // client.close();

})
