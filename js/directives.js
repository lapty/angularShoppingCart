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
        templateUrl: "views/inventory.html",
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
        templateUrl: "views/shoppingcart.html",
        link: function (scope, element, attrs) {
        }
      };
    })
