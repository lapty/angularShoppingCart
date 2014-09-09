angular.module("localService")
    .controller("localProdsCtrl", function ($rootScope, $scope, $routeParams, $location, localProdsSvc) {

        $scope.prods = localProdsSvc.getProds();

        $scope.singleProd = localProdsSvc.getProd($routeParams.idx);
        console.log($scope.singleProd);
        $scope.addProd = function (prod) {
            localProdsSvc.addProd(prod);
            $location.path("/prodLocal");
        };

        $scope.editProd = function (idx, prod) {
            localProdsSvc.updateProd(idx, prod);
            $location.path("/prodLocal");
        };

        $scope.deleteProd = function (idx) {
            localProdsSvc.deleteProd(idx);
        };

        $rootScope.$on("prod:added", function () {
            $scope.prods = localProdsSvc.getProds();

        });

        $rootScope.$on("prod:updated", function () {
            $scope.prods = localProdsSvc.getProds();

        });

        $rootScope.$on("prod:deleted", function () {
            $scope.prods = localProdsSvc.getProds();

        });



    });
