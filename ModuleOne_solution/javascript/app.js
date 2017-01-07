/*
 *@author -  Yogesh Ghimire
 *Assignment 1 as a part of Single Page Web Applications with AngularJS 
 */
(function () {
    angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckControllerFunction)
    LunchCheckControllerFunction.$inject = ["$scope"];

    function LunchCheckControllerFunction($scope) {
        $scope.userInput = ""; //User input - comma separated values
        $scope.validateUserInput = function () {
            var inputArray = $scope.userInput.split(",");
            $scope.message = $scope.checkIfInputIsValid(inputArray);
            return $scope.message;
        }
        $scope.checkIfInputIsValid = function (input) {
            var processedInputData = processInputData(input);
            return checkInputLengthAndGetMsg(processedInputData);
        }
    }

    function processInputData(input) {
        var newInput = []; //This array will hold processed data
        for (var i = 0; i < input.length; i++) {
            if (!input[i]) { //If no item specified, simply check for another item if present
                continue;
            }
            var result = input[i].trim(); //Do not consider Empty Item i.e , ,
            newInput[i] = result; //Store the processed data in the new array
        }
        return newInput;
    }

    function checkInputLengthAndGetMsg(processedInputData) {
        if (processedInputData.length === 0) {
            return "Please enter data first"
        }
        if (processedInputData.length <= 3 && processedInputData.length > 0) {
            return "Enjoy!";
        }
        if (processedInputData.length > 3) {
            return "Too Much!";
        }
    }
})();