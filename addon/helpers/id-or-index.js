import Ember from 'ember';

/**
  Helper that returns the id of an object if one exists or the index if not
  ```javascript
  let obj = { id: 1, name: 'Jimmy Olsen' };
  {{display-property obj index}} // should return 1
  ```
  @method display-property
  @param {Object}
  @param {Number}
  @return {Number}
*/
export function idOrIndex(params) {
  let obj    = params[0];
  let idx    = params[1];

  return obj.hasOwnProperty('id') ? Ember.get(obj, 'id') : idx;
}

export default Ember.Helper.helper(idOrIndex);
