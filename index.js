/**
 * Conditionally concatenates the provided strings
 *
 * @param {object} string Strings to be concatenated. Must be
 * must be in form { "yolo-class": true, "awesome-class": false }
 *
 * @return string The concatenated string
 */
module.exports = function concat(strings) {
  // Let's first check if the provided `strings` is not an object
  if ( typeof strings !== 'object') {
    throw new Error(
      'Strings to be concatenated must be an object, ' +
    	'in form of { "yolo": true }'
  	);
  }

  var keys = Object.keys(strings); // Keys of the object
  var result = ''; // Our resulting string, where each string will be concatenated
  var i = 0; // Used to check if we should add a space before the string is concatenated

  for(key in keys) {
    // We'll concatenate if the value of key (`{yolo: true}`) is `true`
  	if ( strings[key] === true )
      result += (i == 0 ? '' : ' ') + key;

    ++i;
  }

  return result;
}
