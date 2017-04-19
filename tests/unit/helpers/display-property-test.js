import { displayProperty } from 'dummy/helpers/display-property';
import { module, test } from 'qunit';

module('Unit | Helper | display property');

test('returns the value of the passed in property on the passed in object', function(assert) {
  let result = displayProperty([{ name: "Bob" }, "name"]);
  assert.equal(result, "Bob", "The value of the property key that is passed in is returned.");
});

test('if no second param is passed in, we just get the first item back', function(assert) {
  let result = displayProperty(["Bob", null]);
  assert.equal(result, "Bob", "The value of the item is returned.");
});
