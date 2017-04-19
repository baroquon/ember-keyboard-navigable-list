import Ember from 'ember';

const Person = Ember.Object.extend({ alt: Ember.computed('name', 'id', function(){ return `${this.get('id')} ${this.get('name')}`}) })
const obj1 =  { name: 'Bob' },
      obj2 =  { name: 'Larry' },
      obj3 =  { name: 'William' },
      obj4 =  { name: 'Tim' },
      obj5 =  { name: 'Sarah' },
      obj6 =  { name: 'Brett' },
      obj7 =  { name: 'Kristen' },
      obj8 =  { name: 'Courtney' },
      obj9 =  { name: 'Dan' },
      obj10 = { name: 'Karen' };

const obj11 =  Person.create({  id: 1, name: 'Bob'}),
      obj22 =  Person.create({  id: 2, name: 'Larry'}),
      obj33 =  Person.create({  id: 3, name: 'William'}),
      obj44 =  Person.create({  id: 4, name: 'Tim'}),
      obj55 =  Person.create({  id: 5, name: 'Sarah'}),
      obj66 =  Person.create({  id: 6, name: 'Brett'}),
      obj77 =  Person.create({  id: 7, name: 'Kristen'}),
      obj88 =  Person.create({  id: 8, name: 'Courtney'}),
      obj99 =  Person.create({  id: 9, name: 'Dan'}),
      obj110 = Person.create({  id: 10, name: 'Karen'});

export default Ember.Controller.extend({
  contentArray: [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10],
  objContentArray: [obj11, obj22, obj33, obj44, obj55, obj66, obj77, obj88, obj99, obj110],
  stringContentArray: [
    'Greg Maddux',
    'Rick Sutcliffe',
    'Joe Girardi',
    'Shawon Dunston',
    'Mark Grace',
    'Ryne Sandberg',
    'Andre Dawson'],
    parentMethodForChange(item){
      console.log('method called in the controller on item change. Plus item: ', item);
    },
    parentMethodForBottomOfList(){
      console.log('method called in the controller after pushing down on last item');
    }
});
