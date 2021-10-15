const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// mongoDB connection config
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection successfull'))
  .catch((err) => console.log(err));

// middleware here...
app.use(helmet());
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', require('./routes/favorites'));

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
