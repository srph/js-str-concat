![cover](https://cloud.githubusercontent.com/assets/5093058/6545434/14d17d92-c5c2-11e4-97fe-4517b365c3d5.png)

# str-concat.js [![Build Status](https://travis-ci.org/srph/js-str-concat.svg?branch=master)](https://travis-ci.org/srph/js-str-concat?branch=master) [![npm version](http://img.shields.io/npm/v/srph-str-concat.svg?style=flat)](https://npmjs.org/package/srph-str-concat) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

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

## Installation

- **str-concat.js** is available via [**npm**]

```bash
$ npm install srph-str-concat --save
```

- **str-concat.js** is available via [**bower**]

```bash
$ bower install srph-str-concat --save
```

\* *The purpose of the `--save` argument is to add it your `package.json`''s or `bower.json`'s dependencies.*

- **str-concat.js** is available via [**RawGit** (CDN)]

```html
<!-- use this on production -->
https://cdn.rawgit.com/srph/str-concat.js/master/dist/str-concat.min.js
<!-- otherwise use this for development / testing -->
https://rawgit.com/srph/str-concat.js/master/dist/str-concat.min.js
```

\* *Just pick one. If you're not sure which, just pick the first one.*

### Browser-use

If you're not using *CommonJS* Modules (*browserify*, *Webpack*, w/e), or *AMD* (*Require.JS*), don't forget to add the `script` tag:

```html
<script src="/path/to/str-concat.min.js"></script>
```

## Usage

Our function accepts `1` argument (`Object`) and `return`s a `string`.

```js
var concat = require('srph-str-concat');

var classNames = concat({
  'col-md-6': 5 == 5,
  'form-group': true,
  'yolo-class': false
});

console.log(classNames); // => col-md-6 form-group
```

### Browser-use

For those who use it directly in the browser, you can use it like so:

```js
strConcat({
  'form-group': true,
  'yolo-class': false
}) // => form-group;
```

## Contributing

For features or fixes, I would suggest to submit an issue first before submitting a pull request. This avoids closed pull-requests; useless work.

At the end of the day, just feel free to inquire for anything!

### Building

Check [`docs/building`](https://github.com/srph/str-concat.js/blob/master/docs/building.md).

## FAQ

Check [`docs/faq`](https://github.com/srph/str-concat.js/blob/master/docs/faq.md).

## Changelog

Check [`docs/changelog`](https://github.com/srph/str-concat.js/blob/master/docs/changelog.md).

## Alternatives

- [**classnames** (`JedWatson/classnames`)](https://github.com/JedWatson/classnames)

## Acknowledgement

**str-concat.js** © 2015+, Kier Borromeo (srph). **str-concat.js** is released under the [MIT](mit-license.org) license.

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)
