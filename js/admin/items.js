angular.module("httpService",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/admin/list.html",
                controller: "itemsCtrl"
            })
            .when("/httpSvc/new", {
                templateUrl: "views/admin/create.html",
                controller: "itemsCtrl"
            })
            .when("/store/:id/edit", {
                templateUrl: "views/admin/edit.html",
                controller: "itemsCtrl"
            })

            .when("/admin", {
                templateUrl: "views/admin/admin.html",
                controller: "itemsCtrl"
            })



    });
