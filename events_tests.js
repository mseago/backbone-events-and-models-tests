
QUnit.test('The circus object needs a function for adding a circus animal.', function( assert ) {
  var circus = new Circus();
  assert.notEqual(circus.add, undefined, 'Should have a method for adding a circus animal.' );
});

QUnit.test('The circus needs to keep a list of its animals and give the proper count when asked, even if there are no animals.', function( assert ) {
  var circus = new Circus();
  assert.notEqual(circus.animalCount, undefined, 'Should have a method for adding a circus animal.' );
  assert.equal(circus.animalCount(), 0, 'The animal count is incorrect. Should be zero.' );
});

QUnit.test('After an animal is added to the circus, the count should go up.', function( assert ) {
  var circus = new Circus();
  circus.add(new Animal('zebra'));
  assert.notEqual(circus.animalCount, undefined, 'Should have a method for adding a circus animal.' );
  assert.equal(circus.animalCount(), 1, 'The animal count is incorrect. Should be 1.' );
});

QUnit.test('By default the ringmaster needs to be calm.', function( assert ) {
  var ringmaster = new Ringmaster();
  assert.equal(ringmaster.isCalm, true, 'message.' );
});

//REQUIREMENT: Use backbone events to connect the circus and the ringmaster
QUnit.test('When a ringmaster watches a circus and a lion is added to the circus, the ringmaster needs to lose his calm.', function(assert) {
  var ringmaster = new Ringmaster();
  var circus = new Circus();
  assert.notEqual(ringmaster.watch, undefined, 'The ringmaster has no watch method.');

  ringmaster.watch(circus);
  circus.add(new Animal('lion'));
  assert.equal(ringmaster.isCalm, false, 'The ringmaster should not be calm.');
});

QUnit.test('When a ringmaster watches a circus and any animal other than a lion is added to the circus, the ringmaster should keep his calm.', function(assert) {
  var ringmaster = new Ringmaster();
  var circus = new Circus();
  assert.notEqual(ringmaster.watch, undefined, 'The ringmaster has no watch method.');

  ringmaster.watch(circus);
  circus.add(new Animal('duckbilled platypus'));
  assert.equal(ringmaster.isCalm, true, 'The ringmaster should still be calm.');
});

QUnit.test('The ringmaster should have a starting salary of 40000 dollars.', function(assert) {
  var ringmaster = new Ringmaster();

  assert.equal(ringmaster.salary, 40000, 'The ringmaster should have a different salary.');
});

QUnit.test('When a ringmaster is responsible for a circus with more than four animals, his salary goes up to 45000 dollars.', function(assert) {
  var ringmaster = new Ringmaster();
  var circus = new Circus();
  assert.notEqual(ringmaster.watch, undefined, 'The ringmaster has no watch method.');

  ringmaster.watch(circus);

  assert.equal(ringmaster.salary, 40000, 'With no animals, the ringmaster should have a 40K salary.')
  circus.add(new Animal('duckbilled platypus'));
  circus.add(new Animal('weasel'));
  circus.add(new Animal('elephant'));
  circus.add(new Animal('lion'));
  assert.equal(ringmaster.salary, 40000, 'With four animals, the ringmaster should have a 40K salary.')

  circus.add(new Animal('mouse'));
  assert.equal(ringmaster.salary, 45000, 'With five animals, the ringmaster should have a 45K salary.')
});
