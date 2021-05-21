const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_routers')
const cors = require('cors');

app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
  .then(client => {
    const db = client.db('top_trumps');
    const footballCollection = db.collection('football');
    const footballRouter = createRouter(footballCollection);
    const simpsonsCollection = db.collection('simpsons')
    const simpsonsRouter = createRouter(simpsonsCollection);
    app.use('/api/football', footballRouter);
    app.use('/api/simpsons', simpsonsRouter);
  })
  .catch(console.error);

  
app.use(express.json());

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
