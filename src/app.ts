import express, { Express, Request } from 'express'
import cors from 'cors'

const app: Express = express();

app.set('port', 4000)
app.use(cors<Request>())
app.use(express.static('./src/view'))
app.use(express.json())

app.listen(app.get('port'), () => console.log(`Server running on: http://localhost:${app.get('port')}`))