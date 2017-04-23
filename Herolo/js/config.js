// angular route config to get data at start and handle it if succeed or not
app.config(function ($routeProvider) {
    $routeProvider.when('/Home', {
        templateUrl: "inc/home.htm",
        controller: "TableController",
        resolve: {
            books: function (booksService) {
                return booksService.GetBooks();
            }
        }
    })
    .otherwise({ redirectTo: '/Home' });
});
