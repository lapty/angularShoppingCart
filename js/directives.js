angular.module("directives", [])

    .directive("inventory", function () {
      return {
        restrict: "E",
        scope: {
            _id: "@",
          title: "@",
          image: "@",
          price: "@",
          content: "@"
        },
        templateUrl: "views/directives/inventory.html",
        link: function (scope, element, attrs) {
        }

      };
    })

    .directive ("shoppingcart", function () {
        return {
        restrict: "E",
        scope: {
            _id: "@",
          title: "@",
          image: "@",
          price: "@",
          quantity: "@"
        },
        templateUrl: "views/directives/shoppingcart.html",
        link: function (scope, element, attrs) {
        }
      };
    })
