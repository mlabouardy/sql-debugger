'use strict';

angular.module('sqlDebugger')
  .controller('RowsCtrl',function($scope, $routeParams, EngineFactory){
    $scope.header=[];
    EngineFactory.rows($routeParams.database, $routeParams.table).then(function(data){
      $scope.rows=data.data;
      if($scope.rows.length>0)
        $scope.header=Object.keys($scope.rows[0]);
    })

    $scope.refresh=function(){
      EngineFactory.rows($routeParams.database, $routeParams.table).then(function(data){
        $scope.rows=data.data;
        if($scope.rows.length>0)
          $scope.header=Object.keys($scope.rows[0]);
      })
    }
  });
