var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var headerParserRouter = require('./routes/headerParser');

var app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', headerParserRouter);

module.exports = app;
