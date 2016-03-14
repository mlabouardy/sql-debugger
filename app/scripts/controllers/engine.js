'use strict';

angular.module('sqlDebugger')
.controller('EngineCtrl',function($scope, EngineFactory, $uibModal, $location){
  $scope.config = JSON.parse(localStorage.getItem('config'));

  $scope.tables=[];
  $scope.databases=[];

  $scope.database="";

  EngineFactory.databases().then(function(data){
    $scope.databases=data.data;
  })

  $scope.getTables=function(database){
    $scope.database=database;
    EngineFactory.tables(database).then(function(data){
      $scope.tables=data.data;
    })
  }

  $scope.refresh=function(){
    EngineFactory.databases().then(function(data){
      $scope.databases=data.data;
    })
  }

$scope.getRows=function(database, table){
  $location.path('/databases/'+database+'/tables/'+table);
}
});
