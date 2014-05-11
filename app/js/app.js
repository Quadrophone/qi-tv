'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', 
    ['myApp.filters',
     'myApp.services',
     'myApp.controllers']);

function MyController ($scope) {
  $scope.collection = ["Item 1", "Item 2"];

  $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection

  $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
  };
}