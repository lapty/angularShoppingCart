angular.module("climbOn",
    [
    "localService",
    "ngRoute",
    ])

.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "homeCtrl"
        })
        // .otherwise({
        //     redirectTo: "/"
        // });
});