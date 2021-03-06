var concat = require('../src/index');

describe('concat', function() {
  describe('argument exceptions', function() {
    it('should throw an error if given value is not an object or string', function() {
      expect(function() { concat(123) }).toThrow();
      expect(function() { concat([]) }).toThrow();
      expect(function() { concat(['asd', 1]) }).toThrow();
    });
    
    it('should not throw an error if given value is an object or string', function() {
      expect(function() { concat('asd', 'asd') }).toThrow();
      expect(function() { concat('asd', {}) }).toThrow();
      expect(function() { concat({ 'asd': true }, { 'asd2': false }).toThrow();
    });
  });
  
  it('should give me the appropriate class name based on the provided argument', function() {
    expect(concat({
      'hello-class': true,
      'x-class': false,
      'po-class': true,
      'koya-class': true
    })).toBe('hello-class po-class koya-class');
  });
  
  it('should only accept boolean value `true`', function() {
    expect(concat({
      'mega': 'true',
      'super': true,
      'electro': 123,
      // An example of typecasting since we only accept the boolean value `true`
      // that the consumer should typecast it himself.
      'ultra': !!'yolo', 
      'swag': true
    })).toBe('super ultra swag');
  });
});
