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
  sendItem: null,
  afterLastItem: null,
  init(){
    this._super(...arguments);
    this.set('keyboardActivated', true);
    //this.setActiveItem();
    this.set('hasLink', !!this.get('linkDirection'));
  },
  upWatcher: Ember.on(keyUp('KeyK'), function() {
    this.moveUp();
  }),
  kWatcher: Ember.on(keyUp('ArrowUp'), function() {
    this.moveUp();
  }),
  Jwatcher: Ember.on(keyUp('KeyJ'), function() {
    this.moveDown();
  }),
  downWatcher: Ember.on(keyUp('ArrowDown'), function() {
    this.moveDown();
  }),
  moveUp(){
    if(this.get('activeItem') > 0){
      let activeItem = this.decrementProperty('activeItem');
      let selectedObj = this.getSelected(activeItem);
      this.sendSelectedItem(selectedObj);
    }

  },
  moveDown(){
    let contentArray = this.get('contentArray');
    if(this.get('activeItem') < contentArray.length - 1){
      let activeItem = this.incrementProperty('activeItem');
      let selectedObj = this.getSelected(activeItem);
      this.sendSelectedItem(selectedObj);
    } else {
      this.afterLastArrayItem()
    }
  },
  getSelected(activeIndex){
    return this.get('contentArray')[activeIndex];
  },
  sendSelectedItem(item){
    if(this.get('sendItem')){
      this.get('sendItem')(item);
    }
  },
  afterLastArrayItem(){
    if(this.get('afterLastItem')){
      this.get('afterLastItem')();
    }
  }
});
