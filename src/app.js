const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '10mb'}));

app.use('/course', require('./courses/routes'));

module.exports = app;
