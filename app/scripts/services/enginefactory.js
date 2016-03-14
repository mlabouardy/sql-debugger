'use strict';

angular.module('sqlDebugger')
  .service('EngineFactory',function($http){
    var config=JSON.parse(localStorage.getItem('config'));
    return{
      databases:function(){
        return $http.post('/databases',config);
      },
      tables:function(db){
        config.database=db;
        return $http.post('/tables',config);
      },
      rows:function(db, table){
        config.database=db;
        config.table=table;
        return $http.post('/rows',config);
      }
    }
  });
