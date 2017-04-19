import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('keyboard-navigable-list', 'Integration | Component | keyboard navigable list', {
  integration: true
});

test('if passed in an array it renders the items in a list.', function(assert) {

  //this.set('theArray', [{ name: 'hello'}, {name: 'second item'}, {name: 'third item'}]);
  this.set('theArray', [1, 2, 3]);
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{keyboard-navigable-list contentArray=theArray}}`);

  assert.equal(this.$('ul[data-parent-ul] > li').length, 3, 'it renders the proper number of items');
  assert.equal(this.$('ul[data-parent-ul] > li').first().text().trim(), 1, 'the first item is 1');
  assert.equal(this.$('ul[data-parent-ul] > li').last().text().trim(), 3, 'the last item is 3');
});

test('if passed in an array contains an object key it displays that property on the object.', function(assert) {
  this.set('theArray', [{ name: 'hello'}, {name: 'second item'}, {name: 'third item'}]);

  this.render(hbs`{{keyboard-navigable-list contentArray=theArray objectKey="name"}}`);

  assert.equal(this.$('ul[data-parent-ul] > li').first().text().trim(), 'hello', 'the first item is hello');
  assert.equal(this.$('ul[data-parent-ul] > li').last().text().trim(), 'third item', 'the last item is third item');
});

test('after the component loads the if there are no ids on the objects the first li has the active class by default', function(assert) {
  this.set('theArray', [{ name: 'hello'}, {name: 'second item'}, {name: 'third item'}]);

  this.render(hbs`{{keyboard-navigable-list contentArray=theArray objectKey="name"}}`);

  assert.ok(this.$('ul[data-parent-ul] > li').first().hasClass('active'), 'the first item is active by default');
});
