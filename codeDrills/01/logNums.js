var logNums = {
    code: `// Write code to print all numbers from 1 to 'num'
    // Assume 'num' will be a positive number
    
    var logNums = function(num) {};`,
    test: `var expect = chai.expect;

    before(function() {
      window._temp = {};
      window._temp.log = console.log;
      window.console.log = (function(...args) {
        var values = [];
    
        var log = function(args) {
          values.push(args);
          window._temp.log(args);
        };
    
        log.calledWith = function() {
          return values;
        };
    
        return log;
      })();
    });
    
    describe("logNums", function() {
      it("log numbers 1 through 'num'", function() {
        var num = 10;
    
        logNums(num);
    
        expect(console.log.calledWith()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      });
    });
    
    after(function() {
      console.log = window._temp.log;
      delete window._temp;
    });`
}

export default logNums;