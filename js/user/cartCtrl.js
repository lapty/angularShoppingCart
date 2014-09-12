angular.module("userService")
    .controller("cartCtrl", function ($scope, $rootScope, $location, $routeParams, cartSvc) {

        $scope.cartTotal = 0;

        cartSvc.getCarts().then(function (carts) {
           $scope.carts = carts.data;
                for (var i = 0; i < carts.data.length; i++) {
                    $scope.cartTotal += (carts.data[i].price * carts.data[i].quantity);
           };
        });

        cartSvc.getCart($routeParams.id).then(function (response) {
            $scope.singleCart = response.data;

        });

        $scope.updateCart = function (cart) {
            cartSvc.updateCart(cart).then(function () {
                $location.path("/store/cart");
            });
        };


        $scope.deleteCart = function (id) {
            cartSvc.deleteCart(id)
        };

/////event listeners

        $rootScope.$on("cart:deleted",  function() {
            cartSvc.getCarts().then(function (carts) {
            $scope.carts = carts.data;
        });
      });

        $rootScope.$on("cart:updated",  function() {
            cartSvc.getCarts().then(function (carts) {
            $scope.carts = carts.data;
        });
      });

      $scope.cartTotal = cartSvc.cartTotal();

    });
