import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('ok')
});

module.exports = router;
