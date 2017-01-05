(function(){
    angular.module('ShoppingListController')
        .controller('BoughtController',BoughtController)

    BoughtController.$inject = ['$scope','ShoppingListService']
    function BoughtController($scope, ShoppingListService) {
      $scope.getJoiner = ShoppingListService.getJoiner

      var bought = this

      bought.items = ShoppingListService.getItems(bought)

    }

})()
