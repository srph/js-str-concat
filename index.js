/**
 * Conditionally concatenates the provided strings
 *
 * @param {object} string Strings to be concatenated. Must be
 * must be in form { "yolo-class": true, "awesome-class": false }
 *
 * @return string The concatenated string
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.strConcat = factory();
  }
}(this, function () {
  return function strConcat(strings) {
    // Let's first check if the provided `strings` is not an object
    if ( typeof strings !== 'object') {
      throw new Error(
        'Strings to be concatenated must be an object, ' +
        'in form of { "yolo": true }'
      );
    }
  
    var keys = Object.keys(strings); // Keys of the object
    var result = ''; // Our resulting string, where each string will be concatenated
    
    keys.forEach(function(key) {
      // We'll concatenate if the value of key (`{yolo: true}`) is `true`
      if ( strings[key] === true )
        result += (result == '' ? '' : ' ') + key;
    });
  
    return result;
  }
}));
