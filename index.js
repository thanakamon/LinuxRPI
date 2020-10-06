
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');


router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
  app.use('/pic', express.static('pic'))
});
app.use('/',router)
app.listen(3008, function(){
  console.log('3008');
})
