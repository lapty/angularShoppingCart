angular.module("userService")
    .controller("cartCtrl", function ($scope, $rootScope, $location, $routeParams, cartSvc) {

       cartSvc.getCarts().then(function (carts) {
           $scope.carts = carts.data;

        });

        cartSvc.getCart($routeParams.id).then(function (response) {
            $scope.singleCart = response.data;

        });

        $scope.addCart = function (cart) {
            cartSvc.addCart(cart).then(function () {
                $location.path("/store");
            });

        };

        $scope.editCart = function (cart) {
            cartSvc.updateCart(cart).then(function () {
                $location.path("/store");
            });
        };

        $scope.deleteCart = function (id) {
            cartSvc.deleteCart(id).then(function () {
                $location.path("/store/cart");
            });
        };

        $rootScope.$on("item:deleted",  function() {
        cartSvc.getCarts().then(function (carts) {
          $scope.carts = carts.data;
        });
      });

    });
