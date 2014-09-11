angular.module("lapty",
    [
    "userService",
    "httpService",
    "ngRoute",
    "directives",
    ])

.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "homeCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });
});
