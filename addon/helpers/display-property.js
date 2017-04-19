import Ember from 'ember';
/**
  Helper that returns a specific property value of an object
  ```javascript
  let obj = { name: 'Jimmy Olsen' };
  {{display-property 'name' obj}} // should return 'Jimmy Olsen'
  ```
  @method display-property
  @param {Object|String}
  @param {String}
  @return {String|Boolean|Number|Array|Object}
*/
export function displayProperty(params) {
  const obj  = params[0];
  const prop = params[1];
  if(typeof obj === "object" && !!prop){
    return obj[prop];
  } else {
    return obj;
  }
}

export default Ember.Helper.helper(displayProperty);
