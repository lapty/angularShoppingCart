angular.module ("localService", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/prodLocal", {
                templateUrl: "views/localSvcDemo/list.html",
                controller: "localProdsCtrl"
            })
            .when ("/prodLocal/new", {
                templateUrl: "views/localSvcDemo/create.html",
                controller: "localProdsCtrl"
            })
            .when ("/prodLocal/:idx", {
                templateUrl: "views/localSvcDemo/show.html",
                controller: "localProdsCtrl"
            })
            .when ("/prodLocal/:idx/edit", {
                templateUrl: "views/localSvcDemo/edit.html",
                controller: "localProdsCtrl"
            });
    });
