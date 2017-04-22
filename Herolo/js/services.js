app.factory('booksService', function ($q, $http) {
    var getBooks = function () {
        var d = $q.defer();
        //$http.get('http://localhost:8080/server/books.json')
        $http.get('books.json')
			.success(
				function (data) {
				    data = modifyData(data);
				    d.resolve(data);
				})
			.error(
				function (error) {
				    d.reject(error);
				})
        return d.promise;
    };

    var modifyData = function (data) {
        angular.forEach(data, function (o, i) {
            data[i]["Id"] = i + 1;
            var dateVals = data[i].Date.split("/");
            var parsed = new Date(dateVals[2], dateVals[1]-1, dateVals[0]);
            data[i].Date = new Date(parsed);
        });
        return data;
    }
    return {
        GetBooks: getBooks,
        ModifyData: modifyData
    }
});

