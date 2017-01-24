/*
 *@author -  Yogesh Ghimire
 *Assignment 3 as a part of Single Page Web Applications with AngularJS 
 */
(function () {
    angular.module("NarrowItDownApp", []).controller("NarrowItDownController", NarrowItDownControllerFunction).service("MenuSearchService", MenuSearchService).constant("BaseUrl", "https://davids-restaurant.herokuapp.com/menu_items.json").directive("foundItems", foundItemDirectiveFunction).directive("errorDirective", errorDirectiveFunction);

    function errorDirectiveFunction() {
        var ddo = {
            template: "{{controller.errorMessage}}"
        }
        return ddo;
    }

    function foundItemDirectiveFunction() {
        var ddo = {
            scope: {
                controller: "=searchController"
            }
            , templateUrl: "itemdetails.html"
        }
        return ddo;
    }
    NarrowItDownControllerFunction.$inject = ["MenuSearchService"];

    function NarrowItDownControllerFunction(MenuSearchService) {
        var controller = this;
        var service = MenuSearchService;
        controller.narrowItDown = function (input) {
            controller.found = null;
            controller.errorMessage = "";
            if (input === "" || input === null || input === undefined) {
                controller.errorMessage = "Nothing found";
            }
            else {
                var promise = service.getMatchedMenuItems(input);
                promise.then(function (response) {
                    var result = response.data;
                    if (result != null) {
                        var response = result.menu_items;
                        var found = service.checkInputMatchServerResponse(input, response);
                        if(found.length > 0){
                            controller.found = found;
                        }
                        else{
                             controller.errorMessage = "Nothing found";
                        }
                    }
                    else {
                        controller.errorMessage = "Nothing found";
                    }
                }).catch(function (Error) {
                    console.log(Error.message);
                });
            }
        }
    }
    MenuSearchService.$inject = ["$http", "BaseUrl"];

    function MenuSearchService($http, BaseUrl) {
        var service = this;
        service.getMatchedMenuItems = function (input) {
            var response = $http({
                method: "GET"
                , url: BaseUrl
            });
            return response;
        }
        service.checkInputMatchServerResponse = function (input, response) {
            var result = [];
            for (var i = 0; i < response.length; i++) {
                if (response[i].description.toLowerCase().includes(input.toLowerCase())) {
                    result.push(response[i]);
                }
            }
            return service.filteredResponse = result;
        }
    }
})();