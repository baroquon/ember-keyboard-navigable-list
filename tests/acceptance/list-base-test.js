import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list base');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('ul[data-parent-ul]').length, 5, 'One with objects no links, one with objects with links, one with just strings, one block level, one block level with a bunch of stuff and an action in there.');
    assert.equal(find('ul[data-parent-ul]:first li:first > a').length, 0, 'the first list should not have links');
    assert.equal(find('ul[data-parent-ul]:eq( 1 ) li:first a').length, 1, 'because we passed in a linkDirection, the second list should have links');
  });
});

/*
  j = 74,
  k = 75,
  up arrow = 38,
  down arrow = 40
*/
test('pressing the down and up arrows changes the active item in the expected direction', function(assert) {
  visit('/');

  andThen(function() {
    let theFirstItem  = find('ul[data-parent-ul]:first li[data-item-index=0]:first');
    let theSecondItem = find('ul[data-parent-ul]:first li[data-item-index=1]:first');

    assert.notOk(theFirstItem.hasClass('active'), 'When the page first load no item is active');
    keyEvent('ul[data-parent-ul]:first', 'keyup', 40);
    andThen(() => {
      assert.ok(theFirstItem.hasClass('active'), 'after we click on the down arrow the li has a class of active');
      keyEvent('ul[data-parent-ul]:first', 'keyup', 40);
      andThen(() => {
        assert.notOk(theFirstItem.hasClass('active'), 'after we click on the down arrow the second time item the first li is not active');
        assert.ok(theSecondItem.hasClass('active'), 'the second item now has an active class');
        keyEvent('ul[data-parent-ul]:first', 'keyup', 38);
        andThen(() => {
          assert.ok(theFirstItem.hasClass('active'), 'we pushed up this time and the first item is active again');
          assert.notOk(theSecondItem.hasClass('active'), 'now the second item is no longer active');
        });
      });
    });
  });
});

test('pressing the j and k keys changes the active item in the expected direction', function(assert) {
  visit('/');

  andThen(function() {
    let theFirstItem  = find('ul[data-parent-ul]:first li[data-item-index=0]:first');
    let theSecondItem = find('ul[data-parent-ul]:first li[data-item-index=1]:first');

    assert.notOk(theFirstItem.hasClass('active'), 'When the page first load no item is active');
    keyEvent('ul[data-parent-ul]:first', 'keyup', 74);
    andThen(() => {
      assert.ok(theFirstItem.hasClass('active'), 'after we click on the down arrow the li has a class of active');
      keyEvent('ul[data-parent-ul]:first', 'keyup', 74);
      andThen(() => {
        assert.notOk(theFirstItem.hasClass('active'), 'after we click on the down arrow the second time item the first li is not active');
        assert.ok(theSecondItem.hasClass('active'), 'the second item now has an active class');
        keyEvent('ul[data-parent-ul]:first', 'keyup', 75);
        andThen(() => {
          assert.ok(theFirstItem.hasClass('active'), 'we pushed up this time and the first item is active again');
          assert.notOk(theSecondItem.hasClass('active'), 'now the second item is no longer active');
        });
      });
    });
  });
});

