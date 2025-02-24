import express from 'express'
import { MongoClient } from 'mongodb'
import 'dotenv/config'

const app = express()
app.set('port', 4010)
app.use(express.json())

const client = new MongoClient(process.env.MONGO_URI)
const database = client.db('sample_mflix');

app.get('/', async (req, res) => {
  try {
    await client.connect();    
    const usersCollection = database.collection('users');
    const users = await usersCollection.find().limit(100).toArray();
    res.json(users)
  } finally {
    await client.close()
  }
})

app.listen(app.get('port'), () => console.log(`user service listening on: http://localhost:${app.get('port')}`))
