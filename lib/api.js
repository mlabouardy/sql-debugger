var mysql=require('mysql');

module.exports=function(app){

  var client = mysql.createConnection({
    host: "localhost",
    port: "32774",
    user: "root",
    password: "admin"
  });

  client.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

  app.post('/ping',function(req,res){
    var config=req.body;
    var client = mysql.createConnection(config);
    client.connect(function(err){
      if(err)
        res.send(401);
      else {
        res.send(201);
      }
    });
  });

  // GET Databases
  app.get('/databases',function(req,res){
    client.query('SHOW DATABASES',function(err,data){
      if(err)
        res.send(500);
      else
        res.send(data);
    })
  });

  // GET Tables
  app.get('/databases/:db/tables',function(req,res){
    var db=req.params.db;
    client.query('SHOW TABLES FROM '+db,function(err,data){
      if(err)
        res.send(500);
      else
        res.send(data);
    })
  });

  // GET Rows
  app.get('/databases/:db/tables/:table/rows',function(req,res){
    var db=req.params.db;
    var table=req.params.table;
    client.query('SELECT * FROM '+db+"."+table,function(err,data){
      if(err)
        res.send(500);
      else
        res.send(data);
    })
  });
}
