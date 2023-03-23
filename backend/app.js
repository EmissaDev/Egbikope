require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const { celebrate, Joi, errors } = require('celebrate');

const NotFoundedError = require('./errors/NotFoundedError');

const { DATABASE_URL } = require('./utils/configuration');
const { limiter } = require('./middleware/limiter');
const auth = require('./middleware/auth');
const error = require('./middleware/error');
const { requestLogger, errorLogger } = require('./middleware/logger');
const { login, createUser } = require('./controllers/userController');
const { userRoute } = require('./routes');

const notFound = require('./utils/constants');

const app = express();
const { PORT = 3000 } = process.env;

app.use(cors()); //enable all cors requests
app.options('*', cors()); //enable pre-flightimg
app.use(requestLogger);
app.use(express.json());
app.use(helmet());
app.use(limiter);

mongoose.connect(DATABASE_URL);
// {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connecting routes
app.use(express.static(path.join(__dirname, '../../build')));
// app.use(auth);
// app.use('/users', userRoute);

// errors handling
// app.get('*', (req, res, next) => {
//   next(new NotFoundedError(notFound));
// });
app.get('*', (req, res, next) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../../build')});
});

app.use(errorLogger); //enabling error logger
app.use(errors()); //celebrate error handler
app.use(error); //centralized error handler

app.listen(PORT, () => {
  console.log(`Server started\nApp listening at port ${PORT}`);
});
