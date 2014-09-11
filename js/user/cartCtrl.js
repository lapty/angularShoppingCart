angular.module("userService")
    .controller("cartCtrl", function ($scope, $rootScope, $location, $routeParams, cartSvc) {

        $scope.cartTotal = 0;

        cartSvc.getCarts().then(function (carts) {
           $scope.carts = carts.data;
                for (var i = 0; i < carts.data.length; i++) {
                    $scope.checkoutTotal += (carts.data[i].price * carts.data[i].quantity);
           };

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
            cartSvc.deleteCart(id),
            cartSvc.$log("cart:deleted");
            cartSvc.$broadcast("cart:deleted")
        };

        $rootScope.$on("cart:deleted",  function() {
            cartSvc.getCarts().then(function (carts) {
            $scope.carts = carts.data;
        });
      });

      $scope.cartTotal = cartSvc.cartTotal();

    });
