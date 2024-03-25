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

const corsOptions = {
  origin: 'https://photobook-ecru.vercel.app',
  optionsSuccessStatus: 200,
};

// middleware here...
app.use(helmet());
app.use(json());
app.use(cors(corsOptions));

// application routes
app.get('/', (req, res) => {
  res.send('Welcome to photobook..... ');
});
app.use('/api/v1/photos/favorites', jwtCheck, favoritesRouter);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    // Log the error for debugging purposes
    console.error(`Authentication error: ${err.message}`);
    return res.status(401).send('Invalid token, or no token supplied.');
  }

  console.error(err.stack);
  res.status(500).send('An internal server error occurred.');
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
