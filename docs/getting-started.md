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

### Non-node use

Yes. This library consumes [UMD](https://github.com/umdjs/umd/blob/master/returnExports.js), meaning that it supports Require.js and Browser-use (exported as a browser global `strConcat`).

### Browser-use

For those who use it directly in the browser, you can use it like so:

```html
<!-- don't forget to add in the script -->
<script src="/path/to/str-concat.min.js"></script>

<script>
  strConcat({
    'form-group': true,
    'yolo-class': false
  }) // => form-group;
</script>
```
