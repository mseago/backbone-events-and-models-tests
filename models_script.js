'use strict';

var FurnitureStore = Backbone.Model.extend({
  initialize: function() {
    this.set('brokenFurnitureCount', 0);
    this.set('furnitureCountToBeExamined', 0);
  },

  track: function(furniture) {
    var self = this;
    furniture.on('smashed', function() {
      var oldCount = self.get('brokenFurnitureCount');
      self.set('brokenFurnitureCount', oldCount + 1);
    });

    furniture.on('change:condition', function() {
      var oldCount = self.get('furnitureCountToBeExamined');
      self.set('furnitureCountToBeExamined', oldCount + 1);
    });
  }
});

var Furniture = Backbone.Model.extend({
  defaults: {
    'material': 'oak',
    'condition': 'new'
  },

  smash: function() {
    this.trigger('smashed');
  }
});
