
QUnit.test('A furniture model needs to default to be made of oak.', function( assert ) {
  var chair = new Furniture();
  assert.equal(chair.get('material'), 'oak', 'Should have been made of oak.' );
});

QUnit.test('A furniture model needs a method called "smash".', function( assert ) {
  var chair = new Furniture();
  assert.notEqual(chair.smash, undefined, 'Missing a "smash" function.' );
});

QUnit.test('The furniture store needs a function named "track" to keep track of furniture.', function(assert) {
  var store = new FurnitureStore();
  assert.notEqual(store.track, undefined, 'The furniture store needs a function named "track".')
});

QUnit.test('When a piece of furniture at the store gets smashed, the store needs to keep count of that.', function( assert ) {
  var store = new FurnitureStore();
  var chair = new Furniture();

  store.track(chair); //Hint, maybe you should listen for an event...
  assert.equal(store.get('brokenFurnitureCount'), 0, 'The store should not have broken furniture.');

  chair.smash(); //Hint, maybe you should fire an event
  assert.equal(store.get('brokenFurnitureCount'), 1, 'There should be one broken piece of furniture.');
});

QUnit.test('Furniture needs a condition property, defaulted to "new".', function( assert ) {
  var table = new Furniture();
  assert.equal(table.get('condition'), 'new', 'By default funiture should be new.' );
});

QUnit.test('FurnitureStore needs a condition furnitureCountToBeExamined, defaulted to 0.', function( assert ) {
  var store = new FurnitureStore();
  assert.equal(store.get('furnitureCountToBeExamined'), 0, 'By default there should be none to examine.' );
});


QUnit.test('When the condition of a piece of furniture changes, the store needs to plan to examine it.', function(assert) {
  var store = new FurnitureStore();
  var table = new Furniture();

  store.track(table);
  assert.equal(store.get('furnitureCountToBeExamined'), 0, 'The store should have no outstanding items to examine.');

  table.set('condition', 'used');
  assert.equal(store.get('furnitureCountToBeExamined'), 1, 'The store should have one item to examine.');
});

QUnit.test('Furniture now has a sales price. When the price changes, it should not require the store owner to examine its condition.', function( assert ) {

  var store = new FurnitureStore();
  var table = new Furniture({ price: 99.99 });

  store.track(table);
  assert.equal(store.get('furnitureCountToBeExamined'), 0, 'The store should have no outstanding items to examine.');

  table.set('price', 89.99);
  assert.equal(store.get('furnitureCountToBeExamined'), 0, 'The store should still have no outstanding items to examine.');
});





/*
QUnit.test('______', function( assert ) {

  //assert.notEqual(circus.wut, undefined, 'message.' );
});
*/
