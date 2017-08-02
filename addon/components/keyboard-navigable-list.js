import Ember from 'ember';
import layout from '../templates/components/keyboard-navigable-list';
import { EKMixin, keyUp } from 'ember-keyboard';

export default Ember.Component.extend(EKMixin, {
  layout,
  objectKey: null,
  activeItem: -1,
  contentArray: [],
  hasLink: false,
  linkDirection: null,
  sendItem: null,
  afterLastItem: null,
  init(){
    this._super(...arguments);
    this.set('keyboardActivated', true);
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
  click(e){
    // if a user clicks on an item, we want to intercept the click
    // and update the activeItem with the item that was clicked on.
    let target = e.target;

    // if the target has our index we can move on, if it doesn't we need to check it's parentNode
    function hasDataAttr(innerTarget){
      if(innerTarget.hasAttribute('data-item-index')){
        return innerTarget;
      } else {
        return hasDataAttr(innerTarget.parentNode);
      }
    }

    let finalTarget = hasDataAttr(target);

    // here we are just setting the activeItem to the index of the
    // item that was clicked. We store the index on the data-item-index
    // attr which we get from the event passed in from the click.
    this.set('activeItem', Number(finalTarget.getAttribute('data-item-index')));
    return true;
  },
  moveUp(){
    if(this.get('activeItem') > 0){
      let activeItem = this.decrementProperty('activeItem');
      let selectedObj = this.getSelected(activeItem);
      this.sendSelectedItem(selectedObj);
    }

  },
  moveDown(){
    let contentArray = this.get('contentArray');
    let active = this.get('activeItem');
    if(active < contentArray.length - 1){
      let activeItem = this.incrementProperty('activeItem');
      let selectedObj = this.getSelected(activeItem);
      this.sendSelectedItem(selectedObj);
    } else {
      this.afterLastArrayItem(active)
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
