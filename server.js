var express=require('express'),
    logger=require('morgan'),
    bodyParser=require('body-parser'),
    api=require('./lib/api'),
    app=express();

app.use(bodyParser.json());
app.use(logger('dev'));
api(app);

app.listen(3000,function(){
  console.log('Server listening on port '+3000);
});
