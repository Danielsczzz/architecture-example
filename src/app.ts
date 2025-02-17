import express, { Express, Request } from 'express';
import cors from 'cors';

const app: Express = express();

let users: string[] = [];

app.set('port', 4000);
app.use(cors<Request>());
app.use(express.static('./src/view'));
app.use(express.json());

app.post('/users', (req, res) => {
  const { username } = req.body;
  if (username && !users.includes(username)) {
    users.push(username);
    res.status(201).json({ message: 'Usuario creado', username });
  } else {
    res.status(400).json({ error: 'Nombre de usuario inválido o ya existe' });
  }
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(app.get('port'), () => console.log(`Server running on: http://localhost:${app.get('port')}`));
