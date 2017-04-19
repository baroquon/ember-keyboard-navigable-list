import Ember from 'ember';
import layout from '../templates/components/keyboard-navigable-list';

export default Ember.Component.extend({
  layout,
  objectKey: null,
  activeItem: 0,
  contentArray: []

});
