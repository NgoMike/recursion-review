// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      if (result !== expected) {
        console.log('FAIL: ', test);
      }
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      if (result !== expected) {
        console.log('FAIL: ', obj);
      }
      expect(result).to.equal(expected);
    });

  });
});
