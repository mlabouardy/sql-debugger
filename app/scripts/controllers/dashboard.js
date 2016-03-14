'use strict';

angular.module('sqlDebugger')
  .controller('DashboardCtrl',function($scope, $location){
    $scope.config={
      connection:"MySQL",
      hostname:"localhost",
      port:3306,
      username:"root",
      password:"root"
    }

    if(JSON.parse(localStorage.getItem('connections'))!=null){
      $scope.connections=JSON.parse(localStorage.getItem('connections'));
    }else{
      $scope.connections=[];
    }


    $scope.create=function(data){
      $scope.connections.push(angular.copy(data));
      localStorage.setItem('connections', JSON.stringify($scope.connections));
    }

    $scope.view=function(i){
      localStorage.setItem('config', JSON.stringify($scope.connections[i]));
      $location.path('/engine');
    }

    $scope.delete=function(i){
      $scope.connections.splice(i,1);
      localStorage.setItem('connections', JSON.stringify($scope.connections));
    }

    $scope.engines=["MySQL","PostgreSQL","SQLite"];
  });
