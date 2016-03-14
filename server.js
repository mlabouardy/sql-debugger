var express=require('express'),
    logger=require('morgan'),
    bodyParser=require('body-parser'),
    path=require('path'),
    api=require('./lib/api'),
    app=express();

app.use(express.static(path.join(__dirname,'app')));
app.use(bodyParser.json());
app.use(logger('dev'));
api(app);

app.listen(3001,function(){
  console.log('Server listening on port 3001');
});
