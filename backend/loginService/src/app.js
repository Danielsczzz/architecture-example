import express from 'express'
import { MongoClient } from 'mongodb'
import 'dotenv/config'

const app = express()
app.set('port', 4030)
app.use(express.json())

const client = new MongoClient(process.env.MONGO_URI)
const database = client.db('sample_mflix');

app.get('/', async (req, res) => {
  try {
    await client.connect();    
    const moviesCollection = database.collection('movies');
    const movies = await moviesCollection.find().limit(100).toArray();
    res.json(movies)
  } finally {
    await client.close()
  }
})

app.listen(app.get('port'), () => console.log(`movies service listening on: http://localhost:${app.get('port')}`))
