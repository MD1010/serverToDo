import express from 'express';
import bodyParser from 'body-parser';

let router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
import itemInList from '../Schemas/toDoSchema';

/* GET home page. */
router.get('/', (req, res, next)=>
{
  itemInList.find({}).then((items)=>{
    res.send(items);
  }).catch(next);
});

router.post('/',(req,res,next)=>
{ 
  itemInList.create(req.body).then((newItem)=>
  {
    res.json({ _id: newItem._id, content:req.body.content });
  }).catch(next);
});

router.delete('/:id',(req,res,next)=>
{  
  itemInList.findByIdAndDelete({_id:req.params.id}).then((itemInList)=>
  {
    res.json(itemInList);
 }).catch(next);
});

router.put('/:id',(req,res,next)=>
{ 
  itemInList.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>
  {
  itemInList.findOne({_id:req.params.id}).then((itemInList)=>{
      res.send(itemInList);
  });   
 }).catch(next);
});

//////////////////////handle the cased the id doesnt exist
module.exports = router;
