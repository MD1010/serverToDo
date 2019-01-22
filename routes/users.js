import express from 'express';
import bodyParser from 'body-parser';
import usersCollection from '../Schemas/userSchema';
import { validateFields, checkIfuserExists } from '../public/utils/validations'

let router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//add GET find a userName with specific userName
router.get('/', (req, res, next)=>
{
    usersCollection.find({}).then((users)=>
    {
        res.send(users);
    }).catch(next);
});

router.post('/',(req,res,next)=>
{ 
    if(validateFields(req,next) && !checkIfuserExists(req,res,next)){
        usersCollection.create(req.body).then((newUser)=>
        {
            res.json({ userName: newUser.userName, 
                       email: newUser.email,
                       password: newUser.password
                    });
        }).catch(next);
    }
});

router.delete('/:id',(req,res,next)=>
{  
    usersCollection.findByIdAndDelete({_id:req.params.id}).then((user)=>
    {
        res.json(user);
    }).catch(next);
});

module.exports = router;
