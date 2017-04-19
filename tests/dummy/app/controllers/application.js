import Ember from 'ember';

const obj1 = { name: 'Bob' },
      obj2 = { name: 'Larry' },
      obj3 = { name: 'Kevin' };

export default Ember.Controller.extend({
  contentArray: [obj1, obj2, obj3],
});
