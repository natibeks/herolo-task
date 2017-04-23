app.controller('TableController', function ($scope, $rootScope, $http, $filter, books) {

    $scope.books = books;
    $rootScope.dataLoading = false;
    $scope.editMode = 0;
    
    $scope.deleteConfirmation = function (book) {
        $scope.selectedBook = angular.copy(book);
        $("#aysModal").modal('show');
    }
    $scope.deleteBook = function (bid) {
        var index = $scope.getRowIndex($scope.books, bid);
        $scope.books.splice(index, 1);
    }

    $scope.setEditMode = function (book) {
        $scope.selectedBook = angular.copy(book);
        $scope.editMode = book.Id;
    }

    $scope.saveEditChange = function (valid) {
        if (valid) {
            var index = $scope.getRowIndex($scope.books, $scope.selectedBook.Id);
            $scope.books[index] = angular.copy($scope.selectedBook);
            $scope.editMode = 0;
        }
    }

    $scope.cancelAll = function () {
        $scope.editMode = 0;
    }

    // show/hide edit/delete btns on row hover
    $scope.hoverInBookRow = function (book) {
        book.ShowBtn = true;
    };
    $scope.hoverOutBookRow = function (book) {
        book.ShowBtn = false;
    };

    $scope.getRowIndex = function (arr, id) {
        var index;
        angular.forEach(arr, function (o, i) {
            if (o.Id == id)
                index = i;
        });
        return index;
    }

    $scope.tableFields = [{ Title: "#", Width: "50px" },
        { Title: "Autuor", Width: "200px" },
        { Title: "Date", Width: "200px" },
        { Title: "Title", Width: "auto" }];

    // pagination code
    $scope.pager = {
        curr: 0,
        size: 5,
    }
    $scope.isLastPage = function () { return $scope.pager.curr >= ($scope.books.length / $scope.pager.size - 1) };
    $scope.isFirstPage = function () { return $scope.pager.curr == 0 };
    $scope.incPage = function () { $scope.pager.curr++; };
    $scope.decPage = function () { $scope.pager.curr--; };
    $scope.numberOfPages = function () {
        return Math.ceil($scope.books.length / $scope.pager.size);
    };
});
