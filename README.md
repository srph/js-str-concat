![cover](https://cloud.githubusercontent.com/assets/5093058/6545434/14d17d92-c5c2-11e4-97fe-4517b365c3d5.png)

# js-str-concat [![Build Status](https://travis-ci.org/srph/js-str-concat.svg?branch=master)](https://travis-ci.org/srph/js-str-concat?branch=master) [![npm version](http://img.shields.io/npm/v/srph-str-concat.svg?style=flat)](https://npmjs.org/package/srph-str-concat) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

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

Compared to how simple and clean this is:

```js
concat({
  'className1': true,
  'className2': false,
  'className3': true
}); // => true
```

This is helpful for adding `class`es to an `element` conditionally (like in adding classes in *vanilla* or in *ReactJS*, for example).

- [Getting Started](https://github.com/srph/js-str-concat/blob/master/docs/getting-started.md)
  - [Installation](https://github.com/srph/js-str-concat/blob/master/docs/getting-started.md#installation)
  - [Usage](https://github.com/srph/js-str-concat/blob/master/docs/getting-started.md#usage)
  - [Non-node usage](https://github.com/srph/js-str-concat/blob/master/docs/getting-started.md#non-node-use)
    - [Browser-use](https://github.com/srph/js-str-concat/blob/master/docs/getting-started.md#browser-use)
- [Contribution](https://github.com/srph/js-str-concat/blob/master/docs/faq.md)
  - [Building](https://github.com/srph/js-str-concat/blob/master/docs/contributing.md#building)
- [Changelog](https://github.com/srph/js-str-concat/blob/master/docs/changelog.md)

## Important Note

This is an experimental pet project; and technically a dead project. Although It Just Works™, it is not recommended for production. If you'd like to continue this project, feel free to (friendly) fork, or contact me for project continuation or collaboration.

This was written for practice, and, also, because I found [`JedWatson/classnames`](https://github.com/JedWatson/classnames)'s project name to be unlikable for its specific project name, and that it did not provide inline code documentation.

### Alternatives

[**classnames** (`JedWatson/classnames`)](https://github.com/JedWatson/classnames)

## Acknowledgement

**js-str-concat** © 2015+, Kier Borromeo (srph). **js-str-concat** is released under the [MIT](mit-license.org) license.

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)
