import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

let users = [];
const app = express();

app.set('port', 4000);
app.use(cors());
app.use(express.static('./src/view'));
app.use(express.json());

app.use('/users', userRoutes)

app.listen(app.get('port'), () => console.log(`Server running on: http://localhost:${app.get('port')}`));
