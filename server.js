if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/post.routes');
require('dotenv').config({path:'./config/.env'});
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');
const path = require('path');
const { reset } = require('nodemon');

const app = express();


app.options(cors({
  origin: 'https://elegant-leakey-c0d21a.netlify.app/'
}));
/* app.use((req, res, next) => {
  const allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  return next();
}); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
 return res.status(200).send(res.locals.user._id)
});

// routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

 
// server
app.listen( process.env.PORT || 5001, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})

