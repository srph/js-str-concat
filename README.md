# str-concat.js [![Build Status](https://travis-ci.org/srph/str-concat.js.svg?branch=master)](https://travis-ci.org/srph/str-concat.js?branch=master) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Author](http://img.shields.io/badge/author-@srph-blue.svg)](http://img.shields.io/badge/author-@srph-blue.svg)

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

## Installation

- **str-concat.js** is available via [npm ([Github, atm](https://docs.npmjs.com/cli/install))]

```bash
$ npm install srph/str-concat.js --save
```

\* *The purpose of the `--save` argument is to add it your `package.json`'s dependencies.*

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

## Contributing

For features or fixes, I would suggest to submit an issue first before submitting a pull request. This avoids closed pull-requests; useless work.

At the end of the day, just feel free.

## Acknowledgement

**str-concat** © 2015+, Kier Borromeo (srph). **str-concat** is released under the [MIT](mit-license.org) license.

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)
