angular.module("httpService")
    .factory("itemsSvc", function ($http, $rootScope, $log) {

        var urlBase = "http://tiy-august.herokuapp.com/collections/test";
        var urlCart = "http://tiy-august.herokuapp.com/collections/test3";

        var getItems = function() {

            return $http.get(urlBase);

        };

        var getItem = function (id) {
            return $http.get(urlBase + "/" + id);
        }

        var addItem = function (item) {
            return $http.post(urlBase, item).then(function (response) {
                $rootScope.$broadcast("item:added");
                $log.info("item:added");
            });
        };

        var updateItem = function (item) {
            return $http.put(urlBase + "/" + item._id, item).then(function (response) {
                $rootScope.$broadcast("item:updated");
                $log.info("item:updated");
            });
        };

        var deleteItem = function (id) {
            return $http.delete(urlBase + "/" + id).then(function (response) {
                console.log(response)
                $rootScope.$broadcast("item:deleted");
                $log.info("item:deleted");
            });
        };
        var addToCart = function (item) {

            return $http.post(urlCart, item).then(function (response) {
                console.log(response);
            });
        };


        return {
            getItems: getItems,
            getItem: getItem,
            addItem: addItem,
            addToCart: addToCart,
            deleteItem: deleteItem,
            updateItem: updateItem,

        };

    });
