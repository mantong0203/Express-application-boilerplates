require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require ('helmet');

const app = express();

const morganOption = process.env.NODE_ENV === 'production'
  ? 'common'
  : 'dev';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req,res) => {
  res.send('Hello, world!');
});

app.use((error, req,res,next) =>{
  let response;
  if(process.env.NODE_ENV === 'production') {
    response ={ error: {message: 'Server error'}};

  }else{
    console.log
  }
}

);

module.exports = app;