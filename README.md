# str-concat.js


Conditionally concatenate strings.

## Why?

Because concatenating strings this way is hard to read and tedious to write:

```js
var classNames = '';

if ( /* insert true statement */ ){
  classNames += 'className1 ';
}

if ( /* insert false statement */ ){
  classNames += 'className2 ';
}

if ( /* insert true statement */ ){
  classNames += 'className3 ';
}

console.log(classNames) // classNames => className1 className3
```

This is helpful for adding `class`es to an `element` conditionally (like in *vanilla*, or in *ReactJS*, for example).

## Usage

Our function accepts `1` argument (`Object`).

```js
var concat = require('str-concat');

var isColMd6 = true;
var classNames = concat({
  'col-md-6': isColMd6,
  'form-group': true,
  'yolo-class': false
});

console.log(classNames) // => col-md-6 form-group
```

## Acknowledgement

**str-concat** © 2015+, Kier Borromeo (srph). **str-concat** is released under the [MIT](mit-license.org) license.

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)
