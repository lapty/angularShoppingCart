angular.module("userService")
    .factory("cartSvc", function ($http, $rootScope, $log) {

        var urlCart = "http://tiy-august.herokuapp.com/collections/test3"

        var getCarts = function() {

            return $http.get(urlCart);

        };

        var getCart = function (id) {
            return $http.get(urlCart + "/" + id);
        }


        var deleteCart = function (id) {
            $http.delete(urlCart + "/" + id).then(function (response) {
                $rootScope.$broadcast("cart:deleted");
                $log.info("cart:deleted");
            });
        };

        return {
            getCarts: getCarts,
            getCart: getCart,
            deleteCart: deleteCart,

        };

    });
