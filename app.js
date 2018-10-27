import express from 'express';
import path from 'path';
import indexRouter from './routes/index';
import missionRouter from './routes/missions';
import mongoose from 'mongoose';

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/toDoList',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use('/', indexRouter);
app.use('/missions',missionRouter);

app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message})
});
module.exports = app;
