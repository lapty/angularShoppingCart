angular.module("httpService")
    .controller("itemsCtrl", function ($scope, $rootScope, $location, $routeParams, itemsSvc) {

       itemsSvc.getItems().then(function (items) {
           $scope.items = items.data;

        });

        itemsSvc.getItem($routeParams.id).then(function (response) {
            $scope.singleItem = response.data;

        });

        $scope.addItem = function (item) {
            itemsSvc.addItem(item).then(function () {
                $location.path("/admin");
            });

        };

        $scope.editItem = function (item) {
            itemsSvc.updateItem(item).then(function () {
                $location.path("/admin");
            });
        };

        $scope.deleteItem = function (id) {
            itemsSvc.deleteItem(id).then(function () {
                $location.path("/admin");
            });
        };


        $scope.addToCart = function (item) {

            var newItem = {
                title:item.title,
                image:item.image,
                price:item.price,
                content:item.content
            }

            itemsSvc.addToCart(newItem).then(function () {
                $location.path("/store");
            });
        }



    });
