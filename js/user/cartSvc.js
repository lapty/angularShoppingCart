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
            $http.delete(urlCart + "/" + id).success(function (response) {
                $rootScope.$broadcast("cart:deleted");
                $log.info("cart:deleted");
            });
        };

        var cartTotal = function(){
          getCarts().success(function(carts){
            var total = 0;
            for (var i = 0; i < carts.length; i++) {
              total += (carts[i].price * carts[i].quantity)
            }
            console.log(total);
            return total;
          });
        };
        return {
            getCarts: getCarts,
            getCart: getCart,
            deleteCart: deleteCart,
            cartTotal: cartTotal,

        };

    });
