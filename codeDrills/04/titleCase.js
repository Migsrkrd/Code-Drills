var titleCase = {
    title: "04-Title Case",
    code: `// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

    var titleCase = function(str) {};`,
    test:`var expect = chai.expect;

    describe("titleCase", function() {
      it("should return 'The Quick Brown Fox Jumped Over The Lazy Dog' when given 'the quick brown fox jumped over the lazy dog'", function() {
        var str = "the quick brown fox jumped over the lazy dog";
    
        var result = titleCase(str);
    
        expect(result).to.eql("The Quick Brown Fox Jumped Over The Lazy Dog");
      });
    
      it("should return 'A Christmas Carol' when given 'a christmas carol'", function() {
        var str = "a christmas carol";
    
        var result = titleCase(str);
    
        expect(result).to.eql("A Christmas Carol");
      });
    });`
}

export default titleCase;