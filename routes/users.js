import express from 'express'
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb'

let router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const MONGO_CLIENT = mongo.MongoClient;
const MONGO_CONNECT_URL = 'mongodb://Michael:Michael1@ds145484.mlab.com:45484/mdb';
const COLLECTION_NAME = "Users";
     
//get all the users

let doConnection = ()=>{
    MongoClient.connect(MONGO_CONNECT_URL,  { useNewUrlParser: true }, (err, db)=> {
        if(db)
        {
            let dbConnection = db.db("mdb");
            dbConnection.collection(COLLECTION_NAME).find({}).toArray(function(err, result) {
                if (err) console.err(err);
                db.close();                
                console.log(result)
            });
            console.log("successfully connected to DB!")
        }
        if(err)
            console.log("cannot connect :(", err);
    })
}
router.get('/', (req,res,next)=>{
   doConnection()

    // let dbConnection = db.db("Dor");
    // dbConnection.collection(COLLECTION_NAME).find({}).toArray(function(err, result) {
    //     if (err) reject(err);
    //     db.close();                
    //     resolve(result);
    // });
    res.send('at least no crash')
})

module.exports = router