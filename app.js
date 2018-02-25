(function(){
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

 ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var tobuyList = this;

  tobuyList.itemstobuy = ShoppingListCheckOffService.getItemstobuy();

     tobuyList.removeItem = function (itemIndex, name, quantity) {

       ShoppingListCheckOffService.removeItem(itemIndex,name,quantity);

       }

  }
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
      var boughtList = this;
  boughtList.itemsbought = ShoppingListCheckOffService.getItemsbought();
  }
  function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var itemstobuy = [{name:"Eggs", quantity:"10"},{name:"Apple Juice", quantity:"3"},{name:"Orange Juice", quantity:"4"}, {name:"Bread", quantity:"1"}, {name:"Cake", quantity:"1"}];
  var itemsbought= [];


  service.addItembought = function (itemName, quantity) {
    var itembought = {
      name: itemName,
      quantity: quantity
    };
    itemsbought.push(itembought);

  };

  service.getItemstobuy = function () {
    return itemstobuy;
  };
  service.getItemsbought= function () {
    return itemsbought;
  };
  service.removeItem = function (itemIndex,name,quantity) {
      service.addItembought(name,quantity),
      itemstobuy.splice(itemIndex, 1);
    };

}

})();
