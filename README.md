# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @charlielhl/lotide`

**Require it:**

`const _ = require('@charlielhl/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: takes an array and returns the first item in it
* `tail(array)`: takes an array and returns a new array with everything except the first item
* `middle(array)`: takes an array and returns the middle item of it as an array (1 item for odd and 2 items for even)
* `assertArraysEqual(actual, expected)`: takes two arrays and returns a message corresponding to if they match or not
* `assertEqual(actual, expected)`: takes two basic inputs and returns a message corresponding to if they match or not
* `assertObjectsEqual(actual, expected)`: takes two objects and returns a message corresponding to if they match or not
* `countLetters(sentence)`: takes a string and counts the amount of each letter present in it
* `countOnly(allItems, itemsToCount)`: takes an array and an object and returns an object with only the specified inputs counted
* `eqArrays(arr1, arr2)`: takes two arrays and returns a boolean corresponding to if they are equal or not
* `eqObjects(object1, object2)`: takes two objects and returns a boolean corresponding to if they are equal or not
* `findKey(object, callback)`: finds the first key of an object that matches the criteria created by the callback function
* `findKeyByValue(object, value)`: returns an objects key that matches with the given value
* `flatten(array)`: takes a nested array and returns a new, un-nested array
* `letterPositions(sentence)`: returns an object of arrays showing the indices of each letter in a sentence
* `map(array, callback)`: applies a given callback function to each item in an array and returns the result
* `takeUntil(array, callback)`: loops through a given array until it reaches a condition stated by the callback function, which stops the loop, and returns what passed through thus far
* `without(source, itemsToRemove)`: returns a new array based on the source array with things specified by the itemsToRemove array removed
  