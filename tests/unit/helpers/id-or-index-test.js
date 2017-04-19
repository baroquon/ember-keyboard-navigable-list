
import { idOrIndex } from 'dummy/helpers/id-or-index';
import { module, test } from 'qunit';

module('Unit | Helper | id or index');

// Replace this with your real tests.
test('if the first value an object has an id we return the index', function(assert) {
  let result = idOrIndex([{ id: 25 }, 1]);
  assert.equal(result, 25, 'The function returns the id if an object has an id');
});

test('if the first value an object does not have an id we return the index', function(assert) {
  let result = idOrIndex([{ name: 'hello' }, 1]);
  assert.equal(result, 1, 'The function returns the index if an object does not have an id');
});

