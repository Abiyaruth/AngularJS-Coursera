'use strict';
(function () {
  angular.module('LunchCheckApp',[])
  //.controller('LunchCheckController',function($scope){
  .controller('LunchCheckController', LunchCheckController)
//dependency injection
    LunchCheckController.$inject = ['$scope']
    function LunchCheckController ($scope) {
    $scope.noOfFoods=0;
    $scope.foods='';
//Checks if there is an empty item and calculates the item length
    $scope.nextFood=function countFoods(){
      let rx = /(\s*?[^\,\s]+(?:\s[^\,])*\s*?)/g;
  $scope.noOfFoods = ($scope.foods.match(rx) || []).length;
// console.log($scope.noOfFoods);
        }
//Checks the # of items and prints message accordingly.
    $scope.checkFood=function () {
       if($scope.noOfFoods===0){
         $scope.message="Please enter data first";
       }else if($scope.noOfFoods<3) {
         $scope.message="Enjoy!";
       }
       else {
         $scope.message="Too much";
       }
    }
  };

})();
