import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import playlistRoutes from './routes/playlist.routes.js';

const app = express();

app.set('port', 4000);
app.use(cors());
app.use(express.static('./public'));
app.use(express.json());

app.use('/users', userRoutes)
app.use('/playlists', playlistRoutes)

app.listen(app.get('port'), () => console.log(`Server running on: http://localhost:${app.get('port')}`));
