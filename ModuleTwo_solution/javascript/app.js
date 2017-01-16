/*
 *@author -  Yogesh Ghimire
 *Assignment 2 as a part of Single Page Web Applications with AngularJS 
 */
(function () {
    angular.module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyControllerFunction)
        .controller("AlreadyBoughtController", AlreadyBoughtControllerFunction)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffServiceFunction); //Singleton approach for service declatation

    //Define service to share data between controllers
    function ShoppingListCheckOffServiceFunction() {
        var service = this;
        var buyItem = [{
            name: "apple"
            , quantity: 2
        }, {
            name: "mango"
            , quantity: 4
        }, {
            name: "pear"
            , quantity: 1
        }, {
            name: "banana"
            , quantity: 5
        }, {
            name: "cookies"
            , quantity: 10
        }];
        var alreadyBoughtItem = [];
        service.removeFromBuyAndAddInBoughtList = function (index) {
            if (buyItem.length > 0 && buyItem.length <= 5) {
                var removedItem = buyItem.splice(index, 1)[0];
                alreadyBoughtItem.push(removedItem);
            }
            if (buyItem.length === 0) {
                throw Error("Nothing to buy!")
            }
        }
        service.boughtItems = function () {
            return alreadyBoughtItem;
        }
        service.buyingItems = function () {
            return buyItem;
        }
    }
    
    //Inject service in controller
    ToBuyControllerFunction.$inject = ["ShoppingListCheckOffService"];
    //1. Controller
    function ToBuyControllerFunction(ShoppingListCheckOffService) {
        var buy = this;
        buy.buyItem = function (index) {
            try {
                ShoppingListCheckOffService.removeFromBuyAndAddInBoughtList(index);
            }
            catch (Error) {
                buy.errorMessage = Error.message;
            }
        }
        buy.buyItemCollection = ShoppingListCheckOffService.buyingItems();
    }
    
    //Inject service in controller
    AlreadyBoughtControllerFunction.$inject = ["ShoppingListCheckOffService"];
    //2. Controller
    function AlreadyBoughtControllerFunction(ShoppingListCheckOffService) {
        var bought = this;
        bought.boughtItems = ShoppingListCheckOffService.boughtItems();
    }
})();