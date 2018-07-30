const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('unable to connect to MongoDb');
  }
  console.log('connected to MongoDb' );
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'learn mongo',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('User').insertOne({
    name: 'David Carmel',
    age: 25,
    location: 'Indiana'
  }, (err, result) => {
    if(err) {
      return console.log('unable to insert Users', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();

})
