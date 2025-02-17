import express, { Express } from "express";

const app: Express = express();

app.set('port', 4000)
app.use(express.static('./src/static'))
app.use(express.json());

app.listen(app.get('port'), () => console.log(`Server running on: http://localhost:${app.get('port')}`))