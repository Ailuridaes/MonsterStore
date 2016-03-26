(function (){
  var app = angular.module('store-monsters', []);
  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });

  app.directive('gallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'gallery.html',
      controller: function(){
        this.current = 0;

        this.setCurrent = function(setCurrent) {
          this.current = setCurrent ? setCurrent : 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive('monsterTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'monster-title.html'
    };
  });

  app.directive('monsterDescription', function() {
    return {
      restrict: 'E',
      templateUrl: 'monster-description.html'
    };
  });

  app.directive("monsterSpecs", function() {
    return {
      restrict: 'A',
      templateUrl: 'monster-specs.html'
    };
  });

  app.directive("review", function() {
    return {
      restrict: 'E',
      templateUrl: 'review.html'
    };
  });

  app.directive("reviewForm", function() {
    return {
      restrict: 'E',
      templateUrl: 'review-form.html',
      controller: function() {
        this.review = {};

        this.addReview = function(monster) {
          monster.reviews.push(this.review);
          this.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });

})();
