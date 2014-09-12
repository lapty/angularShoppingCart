angular.module("userService")
    .factory("cartSvc", function ($http, $rootScope, $log) {

        var urlCart = "http://tiy-august.herokuapp.com/collections/test3"

        var getCarts = function() {

            return $http.get(urlCart);

        };

        var getCart = function (id) {
            return $http.get(urlCart + "/" + id);
        };

        var deleteCart = function (id) {
            $http.delete(urlCart + "/" + id).success(function (response) {
                $rootScope.$broadcast("cart:deleted");
                $log.info("cart:deleted");
            });
        };

        var updateCart = function (cart) {
            return $http.put(urlCart + "/" + cart._id, cart).then(function (response) {
                $rootScope.$broadcast("cart:updated");
                $log.info("cart:updated");
            });
        };


        var cartTotal = function(){

            var total = 0;

         getCarts().success(function(carts){
            for (var i = 0; i < carts.length; i++) {
              total += (carts[i].price * carts[i].quantity)
            }
            console.log(total);

          });
          return total
        };

        return {
            getCarts: getCarts,
            getCart: getCart,
            deleteCart: deleteCart,
            updateCart: updateCart,
            cartTotal: cartTotal,

        };

    });
