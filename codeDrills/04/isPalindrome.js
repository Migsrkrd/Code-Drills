var isPalindrome = {
    title: "04-Is Palindrome",
    code: `// Write code that returns true if 'str' is a palindrome, and false if 'str' is not a palindrome

    var isPalindrome = function(str) {};
    `,
    test: `var expect = chai.expect;

    describe("isPalindrome", function() {
      it("takes a string and returns true if the string is a palindrome", function() {
        var str = "radar";
    
        var result = isPalindrome(str);
    
        expect(result).to.eql(true);
      });
    
      it("takes a string and returns false if the string is not a palindrome", function() {
        var str = "engage";
    
        var result = isPalindrome(str);
    
        expect(result).to.eql(false);
      });
    });`
}

export default isPalindrome;