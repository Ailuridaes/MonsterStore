(function (){
  var app = angular.module('store', ['store-monsters']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.monsters = [];

    $http.get('monsters.json').success(function(data){
      store.monsters = data;
    });

  } ]);

})();
