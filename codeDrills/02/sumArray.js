var sumArray = {
  title: "02-Sum Array",
  code: `// Write code to add all the numbers in 'arr' and return the total

    var sumArray = function(arr) {};`,
  test: `var expect = chai.expect;

    describe("sumArray", function() {
      it("returns the total of all the numbers in 'arr'", function() {
        var arr = [4, 8, 15, 16, 23, 42];
    
        var result = sumArray(arr);
    
        expect(result).to.eql(108);
      });
    });
`,
};

export default sumArray;
