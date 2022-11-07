var assert = require("assert");
var Calculate =  require('./index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 for a 5!', () => {
      // Setup
      const number = 5
      const expectedOutput = 120

      // Exercise
      const result = Calculate.factorial(number);

      // Verify
      assert.equal(result, expectedOutput);

      // Step 2: assert.equal(Calculate.factorial(5), 120);
    })

    it('returns 6 for a 3!', () => {
      // Setup
      const input = 3;
      const expectedOutput = 6;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      const output = assert.equal(result, expectedOutput);
    });

    it('returns 1 for 0!', () => {
      // Setup
      const input = 0;
      const expectedOutput = 1;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify 
      const output = assert.equal(result, expectedOutput);
    });
  });
});