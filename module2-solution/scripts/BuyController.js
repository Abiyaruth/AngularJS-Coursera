(function(){
    angular.module('ShoppingListController')
        .controller('BuyController', BuyController)

   BuyController.$inject = ['$scope', 'ShoppingListService']
    function BuyController($scope, ShoppingListService) {
        $scope.getJoiner = ShoppingListService.getJoiner

        var buy = this

        buy.items = ShoppingListService.getItems(buy)

        buy.buy = function (itemIndex) {
            ShoppingListService.buyItem(buy, itemIndex)
        }

        ShoppingListService.addItems(buy,
            { quantity: 2, description: 'yogurt' },
            { quantity: 2, description: 'Sunflower Oil' },
            { quantity: '2 dozens', description: 'eggs', joiner: ' of ' },
            { quantity: '4 varities', description: 'Chocolates',joiner:'of' },
            { quantity: 5, description: 'Ice creams' }
        )
    }

})()
