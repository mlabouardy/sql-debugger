var mysql=require('mysql');

module.exports=function(app){

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

  // POST Databases
  app.post('/databases',function(req,res){
    var config=req.body;
    var client = mysql.createConnection({
      host: config.hostname,
      port: config.port,
      user: config.username,
      password: config.password
    });
    client.connect(function(err){
      if(err){
        client.end();
        res.send(401);
      }else {
        client.query('SHOW DATABASES',function(err,data){
          if(err){
            client.end();
            res.send(500);
          }
          else{
            res.send(data);
            client.end();
          }
        })
      }
    });
  });

  // POST Tables
  app.post('/tables',function(req,res){
    var config=req.body;
    var client = mysql.createConnection({
      host: config.hostname,
      port: config.port,
      user: config.username,
      password: config.password,
      database:config.database
    });
    client.connect(function(err){
      if(err){
        client.end();
        res.send(401);
      }else {
        client.query('SHOW TABLES',function(err,data){
          if(err){
            client.end();
            res.send(500);
          }
          else{
            res.send(data);
            client.end();
          }
        })
      }
    });
  });

  // POST ROWS
  app.post('/rows',function(req,res){
    var config=req.body;
    var client = mysql.createConnection({
      host: config.hostname,
      port: config.port,
      user: config.username,
      password: config.password,
      database:config.database
    });
    client.connect(function(err){
      if(err){
        client.end();
        res.send(401);
      }else {
        client.query('SELECT * FROM '+config.table,function(err,data){
          if(err){
            client.end();
            res.send(500);
          }
          else{
            res.send(data);
            client.end();
          }
        })
      }
    });
  });

}
