var oddOrEven = {
  test: `var expect = chai.expect;

  describe("oddOrEven", function() {
    it('should return the string "odd" if a number IS NOT evenly divisible by 2', function() {
      var num = 777;
  
      var result = oddOrEven(num);
  
      expect(result).to.eql("odd");
    });
  
    it('should return the string "even" if a number IS evenly divisible by 2', function() {
      var num = 1002;
  
      var result = oddOrEven(num);
  
      expect(result).to.eql("even");
    });
  });
`,

code: `// Write code to return the string "odd" if 'num' is an odd number
// and return the string "even" if 'num' is an even number

var oddOrEven = function(num) {
    // * If 'num' is evenly divisible by 2, return the string "even".

    //  * If 'num' is not evenly divisible by 2, return the string "odd".
};`
};

export default oddOrEven;
