(function(){
    angular.module('ShoppingListController')
        .service('ShoppingListService', ShoppingListService)

    function ShoppingListService() {
        var service = this;

        var items = {}
        items.tobuy = new ItemBin()
        items.bought = new ItemBin()

        service.getItems = function (context) {
            switch (context.constructor.name) {
                case 'BoughtController':
                    return items.bought
                case 'BuyController':
                    return items.tobuy
            }
        }

        service.buyItem = function(context, itemIndex) {
            switch (context.constructor.name) {
                case 'BoughtController':
                    console.error('[ShoppingListService] - attempt to buy item from BoughtController')
                    break
                case 'BuyController':
                    items.bought.push(items.tobuy[itemIndex])
                    items.tobuy.splice(itemIndex, 1)
            }
        }

        service.addItems = function () {
            let context = Array.prototype.shift.apply(arguments)
            let addItems = Array.prototype.slice.call(arguments)

            switch (context.constructor.name) {
                case 'BoughtController':
                    addItems.forEach(i => items.bought.push(i))
                    break
                case 'BuyController':
                    addItems.forEach(i => items.tobuy.push(i))
            }
        }

        service.getJoiner = function(item) { return item.joiner || ' ' }
    }

    class ItemBin extends Array {
        isEmpty() {
            return this.length>0
        }
    }

})()
