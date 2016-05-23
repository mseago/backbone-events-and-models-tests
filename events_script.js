'use strict';

function Animal(type) {
  this.type = type;
}

function Circus() {
  this.animals = []
}

_.extend(Circus.prototype, Backbone.Events);

function Ringmaster() {
  this.isCalm = true;
  this.salary = 40000;
}

Circus.prototype.add = function(animal) {
  this.animals.push(animal);

  if (animal.type === 'lion') {
    this.trigger('lion-warning');
  }

  this.trigger('animal-count-changed', this.animals.length);
}

Circus.prototype.animalCount = function() {
  return this.animals.length;
}

Ringmaster.prototype.watch = function(circus) {
  var self = this;
  circus.on('lion-warning', function() {
    self.isCalm = false;
  });

  circus.on('animal-count-changed', function(count) {
    console.log('this', this, count);
    if (count > 4) {
      self.salary = 45000;
    }
  });
}
