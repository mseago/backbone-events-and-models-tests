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
  this.trigger("animalAdded", animal);
}

Circus.prototype.animalCount = function() {
  return this.animals.length;
}

function Ringmaster() {
  this.isCalm = true;
  this.salary = 40000;
}
// _.extend(Ringmaster.prototype, Backbone.Events);

Ringmaster.prototype.watch = function(circus) {
  var self = this;
  circus.on("animalAdded", function(animal){
    if(animal.type === "lion"){
      self.isCalm = false;
    }
      if(this.animals.length > 4) {
        self.salary = 45000;
      }
  });
}
