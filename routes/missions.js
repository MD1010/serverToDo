import express from 'express';
import bodyParser from 'body-parser';

let router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import itemInList from '../Schemas/toDoSchema';

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.send('ok')
});

router.post('/',function(req,res,next)
{ 

  itemInList.create(req.body).then(function(newItem)
  {
    console.log(newItem);
    res.json({ content:req.body.content });
  }).catch(next);

});
module.exports = router;
