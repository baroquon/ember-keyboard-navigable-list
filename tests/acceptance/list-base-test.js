import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list base');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('ul[data-parent-ul]').length, 2);
    assert.equal(find('ul[data-parent-ul]:first li:first > a').length, 0, 'the first list should not have links');
    assert.equal(find('ul[data-parent-ul]:eq( 1 ) li:first a').length, 1, 'because we passed in a linkDirection, the second list should have links');
  });
});
