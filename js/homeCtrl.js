angular.module("climbOn")
    .controller("homeCtrl", function ($scope, $log) {
        $scope.test = "TEST TEST TEST located in homeCtrl.js";
        $log.info("loaded home view")
    })
