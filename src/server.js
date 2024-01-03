require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const testConnection = require('./routes/v1/testRoutes');
const petsRouter = require('./routes/v1/petsRoutes');
const medsRouter = require('./routes/v1/medsRoutes');
const logsRouter = require('./routes/v1/logsRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello World');
});

// Use routers
app.use('/v1/api', petsRouter);
app.use('/v1/api', medsRouter);
app.use('/v1/api', logsRouter);

// testConnection();
// connect

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
