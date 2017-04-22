var app = angular.module('myApp', ['ngRoute']);

app.controller('MainController', function ($rootScope) {
	$rootScope.dataLoading = true;
});

