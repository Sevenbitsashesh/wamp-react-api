require('rootpath')();

const express = require('express');
const app = express();

const session = require('express-session');
const cors = require('cors');
// const path = require('path');
app.use(cors({ origin: true }));
app.use('/routes',require('./routes/index.js'));
const bodyParser = require('body-parser');
const jwt = require('./_helper/jwt');
const errorHandler = require('./_helper/error-handler');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(jwt());

// app.use(errorHandler);
 


 const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3500;
 const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});


