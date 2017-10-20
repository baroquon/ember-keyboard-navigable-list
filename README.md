[![Build Status](https://travis-ci.org/baroquon/ember-keyboard-navigable-list.svg?branch=master)](https://travis-ci.org/baroquon/ember-keyboard-navigable-list)

# ember-keyboard-navigable-list

This is an Ember addon that takes a list and adds keyboard shortcuts to all ow you to navigate the list. `j` and `Down Arrow` move the active item down, `k` & `Up Array` move the active item up. This component can take an array of objects with a key for display or an array of strings. If given an array of objects with IDs you can add a link-to to each item in the array by passing in a `linkDirection` attribute.

Thanks to [ember-keyboard](http://null-null-null.github.io/ember-keyboard/#/) addon for making the key events part of this super easy.

[Here is the demo page!](https://baroquon.github.io/ember-keyboard-navigable-list/)

## Installation

`ember install ember-keyboard-navigable-list`

## Usage

In your template add the component:

### An inline component will look like this:

```hbs
  {{keyboard-navigable-list contentArray=someArray}}
```

#### A list of available attributes:

* contentArray - (required) It is the array containing the items we will display.
* objectKey - (optional) If you give the component an array of objects this value tells the component which of the object's properties to display:
* linkDirection - (optional) If you want your items to contain links this is where you would pass the link path. This string should correspond to the path you would pass the `link-to` helper. This will pass the object's id as a param to the link-to.
* activeItem - (optional) This allows you to manually set what item in the array is active. It is based on the items location in the array and it is zero indexed. The default value is -1 (so when you first push down, the active item becomes the first item in the array and the activeItem property's value becomes 0).
* sendItem - (optional) This is the function that will be called when you push the up/down/j/k keys. Example usage would be: `sendItem=(action parentMethodForChange)`
* afterLastItem - (optional) This is the function that gets called the last item in the list is selected and you push down. This could be used to tie into a load more type function on the parent. An example of usage would be `afterLastItem=(action parentMethodForBottomOfList)`

### You can also use it as a block level component:

```hbs
{{#keyboard-navigable-list contentArray=objContentArray
                           afterLastItem=(action parentMethodForBottomOfList)
                           sendItem=(action parentMethodForChange)
                           as |person|}}
  {{person.name}}
{{/keyboard-navigable-list}}
```
When you use it as a block level component you should include `as |someReference|`. `someReference` will give you access to the individual item in the array.

## Contributing

* Fork this this repository
* `git clone <local-repository-url>`
* `cd ember-keyboard-navigable-list`
* `npm install`
* make changes and commit with a good commit message
* open a PR

## Running

* `cd ember-keyboard-navigable-list/tests/dummy`
* `ember s`


## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
