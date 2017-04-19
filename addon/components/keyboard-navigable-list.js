import Ember from 'ember';
import layout from '../templates/components/keyboard-navigable-list';
import { EKMixin, keyUp } from 'ember-keyboard';

export default Ember.Component.extend(EKMixin, {
  layout,
  objectKey: null,
  activeItem: 0,
  contentArray: [],
  hasLink: false,
  linkDirection: null,
  init(){
    this._super(...arguments);
    this.set('keyboardActivated', true);
    this.set('hasLink', !!this.get('linkDirection'));
  },
  Jwatcher: Ember.on(keyUp('KeyJ'), function() {
    this.incrementProperty('activeItem');
  }),
  upWatcher: Ember.on(keyUp('KeyK'), function() {
    this.decrementProperty('activeItem');
  }),
  kWatcher: Ember.on(keyUp('ArrowUp'), function() {
    this.decrementProperty('activeItem');
  }),
  downWatcher: Ember.on(keyUp('ArrowDown'), function() {
    this.incrementProperty('activeItem');
  }),
});
