![Build Status](https://travis-ci.org/baroquon/ember-keyboard-navigable-list.svg?branch=master)

# ember-keyboard-navigable-list

This is an Ember addon that takes a list and adds keyboard shortcuts to all ow you to navigate the list. `j` and `Down Arrow` move the active item down, `k` & `Up Array` move the active item up. This component can take an array of objects with a key for display or an array of strings. If given an array of objects with IDs you can add a link-to to each item in the array by passing in a `linkDirection` attribute.

Thanks to [ember-keyboard](http://null-null-null.github.io/ember-keyboard/#/) addon for making the key events part of this super easy.

## Installation

`ember install ember-keyboard-navigable-list`

## Usage

In your template add the component:

```hbs
  {{keyboard-navigable-list }}
```

### A list of available attributes:

* ...



# Contributing

* Fork this this repository
* `git clone <local-repository-url>`
* `cd ember-keyboard-navigable-list`
* `npm install`
* `bower install`
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
