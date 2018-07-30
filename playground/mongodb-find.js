const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('unable to connect to MongoDb');
  }
  console.log('connected to MongoDb' );
  const db = client.db('TodoApp')

  // db.collection('Todos').find({_id: new ObjectID('5b5d130238a1687c485263c5')}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('unable to print', err)
  // });


  db.collection('User').find({name: 'David'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('unable to print', err)
  });
  // client.close();

})
