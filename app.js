import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import favoritesRouter from './routes/favorites.js';
import { jwtCheck } from './middleware/jwtCheck.js';

const app = express();

// mongoDB connection config
connect(process.env.MONGODB_URL)
  .then(() => console.log('Database connection successfull'))
  .catch((err) => console.log(err));

// middleware here...
app.use(helmet());
app.use(json());
app.use(cors());

// application routes
app.get('/', (req, res) => {
  res.send('Welcome to photobook..... ');
});
app.use('/api/v1/photos/favorites', jwtCheck, favoritesRouter);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
