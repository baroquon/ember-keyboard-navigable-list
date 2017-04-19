import Ember from 'ember';

export function idOrIndex(params) {
  let obj    = params[0];
  let idx    = params[1];

  return obj.hasOwnProperty('id') ? Ember.get(obj, 'id') : idx;
}

export default Ember.Helper.helper(idOrIndex);
