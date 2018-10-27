import express from 'express';
import path from 'path';
import indexRouter from './index';

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
module.exports = app;
