var app = angular.module('myApp', ['ngRoute']);

app.controller('MainController', function ($rootScope) {
    $rootScope.dataLoading = true;
    $rootScope.loadingError = "";
    // show server error alert if getting reject from getting data promise
    $rootScope.$on("$routeChangeError", function (event, current, previous, rejectionMsg) {
        if (typeof (previous) == "undefined") {
            $rootScope.loadingError = rejectionMsg;
            $rootScope.dataLoading = false;
        }
    });
});

