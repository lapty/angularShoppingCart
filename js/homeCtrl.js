angular.module("lapty")
    .controller("homeCtrl", function ($scope, $log) {
        $scope.test = "TEST homeCtrl.js";
        $log.info("loaded home view")
    })
