'use strict';

angular.module('sqlDebugger',['ngRoute','ui.bootstrap'])
  .config(function($routeProvider){
      $routeProvider
        .when('/',{
          templateUrl:'views/dashboard.html',
          controller:'DashboardCtrl'
        })
        .when('/engine',{
          templateUrl:'views/engine.html',
          controller:'EngineCtrl'
        })
        .when('/databases/:database/tables/:table',{
          templateUrl:'views/rows.html',
          controller:'RowsCtrl'
        })
        .otherwise({redirectTo:'/'});
  });
