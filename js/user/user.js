angular.module("userService",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/store", {
                templateUrl: "views/user/list.html",
                controller: "itemsCtrl"
            })
            .when("/store/cart", {
                templateUrl: "views/user/cart.html",
                controller: "cartCtrl"
            })
            .when("/store/:id", {
                templateUrl: "views/user/show.html",
                controller: "itemsCtrl"
            });



    });
