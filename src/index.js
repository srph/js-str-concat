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
  return function() {
    var result = ''; // Our resulting string, where each string will be concatenated
    
    // Iterate through all arguments to check all parameters since
    // we accept `concat('my-class', 'whatever-class', { 'awesome': false })`
    // which is a shorthand for `concat({ 'my-class: true', 'whatever-class': true, 'awesome': false })`;
    for ( var i = 0; i < arguments.length; i++ ) {
      var arg = arguments[i];
      
      // I don't think an array would make sense, like so:
      // `concat(['my-class', 'whatever-class']). It's just bullshit.
      // For numbers, why would you pass a number here?!?!?!?
      // Anyway, we'll bail.
      if ( Array.isArray(arg) || typeof arg == 'number' ) {
        throw new Error('You provided an invalid argument (array | number).');
      }
      
      // Then we'll check if the argument is either an
      // object or string to properly concatenate the strings.
      // For objects, we'll first check if the key values
      // are strictly equal to `true`. Otherwise (for strings),
      // simply concatenate.
      if ( typeof arg === "object" ) {
        // Iterate through each passed key, and then
        // concatenate if the value of key is true
        for ( key in keys ) {
          if ( arg[key] === true ) {
            result += (!result.length ? '' : ' ') + key;
          }
        }
      } else if ( typeof arg == "string" ) {
        result += (!result.length ? '' : ' ') + arg;
      }
    }
  
    return result;
  }
}));
