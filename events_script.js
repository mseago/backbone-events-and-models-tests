'use strict';

function Animal(type) {
  this.type = type;
}

function Circus() {
  this.animals =[];
}
_.extend(Circus.prototype, Backbone.Events);

Circus.prototype.add = function(animal) {
  this.animals.push(animal);
}

Circus.prototype.animalCount = function() {
  return this.animals.length;
}

function Ringmaster() {
  this.isCalm = true;
}

Ringmaster.prototype.watch = function(watchingShow) {
  var self = this;
  watchingShow.on ("circus", function(){
    if (Animal === "lion") {
      self.isCalm === false;
    }
  });
}
