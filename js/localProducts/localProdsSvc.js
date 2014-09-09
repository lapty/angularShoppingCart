angular.module("localService")
    .factory("localProdsSvc", function ($rootScope, $log) {
        var _prods = [
            {
                title: "TEAM 5.10",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: "$160",
                image: "http://www.backcountry.com/images/items/large/FVT/FVT000E/TEABK_D3.jpg"
            },
            {
                title: "TEAM 5.10 VXi (Charles')",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: "$170",
                image: "http://www.backcountry.com/images/items/large/FVT/FVT2015/NEO_D2.jpg"
            },
            {
                title: "5.10 Dragon",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: "$135",
                image: "http://www.backcountry.com/images/items/large/FVT/FVT1993/DRARD_D1.jpg"
            },
            {
                title: "5.10 Blackwing",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: "$155",
                image: "http://www.backcountry.com/images/items/large/FVT/FVT1992/BLU_D2.jpg"
            },
            {
                title: "Evolv Defy",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: "$70",
                image: "http://www.backcountry.com/images/items/large/EVL/EVL0027/CH_D1.jpg"
            },
            {
                title: "Evolv Defy",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: "$70",
                image: "http://www.backcountry.com/images/items/large/EVL/EVL0027/CH_D1.jpg"
            },
            {
                title: "Evolv Defy",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: "$70",
                image: "http://www.backcountry.com/images/items/large/EVL/EVL0027/CH_D1.jpg"
            },
            {
                title: "Evolv Defy",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: "$70",
                image: "http://www.backcountry.com/images/items/large/EVL/EVL0027/CH_D1.jpg"
            },
            {
                title: "Evolv Defy",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: "$70",
                image: "http://www.backcountry.com/images/items/large/EVL/EVL0027/CH_D1.jpg"
            },
            {
                title: "Evolv Defy",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: "$70",
                image: "http://www.backcountry.com/images/items/large/EVL/EVL0027/CH_D1.jpg"
            }


        ];

        var getProds = function () {
            return _prods;
        };

        var addProd = function (newProd) {
            _prods.push(newProd);
            $rootScope.$broadcast("Added a new product")
        };

        var updateProd = function (idx, prod) {
            _prods[idx] = prod;
            $rootScope.$broadcast("Updated product");
            $log.info("Updated product");
        };

        var deleteProd = function (idx) {
            _prods.splice(idx, 1);
        };

        var findProdByIdx = function (idx) {
            return _prods[idx];
        };

        return {
            getProds: getProds,
            getProd: findProdByIdx,
            addProd: addProd,
            updateProd: updateProd,
            deleteProd: deleteProd
        };

    });
