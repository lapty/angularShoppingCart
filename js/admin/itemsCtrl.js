angular.module("httpService")
    .controller("itemsCtrl", function ($scope, $rootScope, $location, $routeParams, itemsSvc) {

       itemsSvc.getItems().then(function (items) {
           $scope.items = items.data;

        });

        itemsSvc.getItem($routeParams.id).then(function (response) {
            $scope.singleItem = response.data;

        });

        $scope.addItem = function (item) {
             itemsSvc.addItem({
                title:item.title,
                image:item.image,
                price:item.price,
                content:item.content,
                quantity:1,
                reviews: []
              }).then(function () {
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

        $rootScope.$on("item:deleted",  function() {
        itemsSvc.getItems().then(function (items) {
          $scope.items = items.data;
        });
      });

        $scope.addReview = function(review){
            itemsSvc.getItem($routeParams.id).success(function(item) {
            $scope.singleItem = item;
            $scope.singleItem.reviews.push({

                name: review.name,
                date: new Date(),
                content: review.content
        });

        itemsSvc.updateItem($scope.singleItem);

      });

      $scope.review = {};
    };



        $scope.addToCart = function (item) {

            var newItem = {
                title:item.title,
                image:item.image,
                price:item.price,
                quantity:item.quantity,
            }

            itemsSvc.addToCart(newItem).then(function () {
                $location.path("/store");
            });
        };

});
