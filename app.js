import express from 'express';
import path from 'path';
import indexRouter from './routes/index';
import missionRouter from './routes/missions';
import usersRouter from './routes/users';
import mongoose from 'mongoose';
import cors from 'cors';

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://Michael:Michael1@ds145484.mlab.com:45484/mdb',{ useNewUrlParser: true })
.catch(err =>
{   console.error('App starting error:', err.stack);
    process.exit(1);
})
mongoose.Promise = global.Promise;

app.use('/', indexRouter);
app.use('/missions',missionRouter);
app.use('/users',usersRouter);
app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message})
});

module.exports = app;
