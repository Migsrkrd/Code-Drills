var oddOrEven = {
  test: `function oddOrEven(num) {
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
  // Define a custom assertion function
  function expect(actual, expected) {
    if (actual !== expected) {
      throw new Error('Assertion failed');
    }
  }
  
  // Test case 1: oddOrEven should return "odd" for odd numbers
  function testOddNumber() {
    var num = 777;
    var result = oddOrEven(num);
    expect(result, "odd");
  }
  
  // Display individual test case description on the HTML
  if (!document.getElementById("testCase1")) {
    var testCase1 = document.createElement("p");
    testCase1.id = "testCase1";
    testCase1.innerHTML = "Test case 1: oddOrEven should return 'odd' for odd numbers <i class='fa-solid fa-x fa-xl' style='color: #ff0000;'></i>";
    testCase1.className = "testCase";
    btnDiv.appendChild(testCase1);
  }

    // Display individual test case description on the HTML
    if (!document.getElementById("testCase2")) {
        var testCase2 = document.createElement("p");
        testCase2.id = "testCase2";
        testCase2.innerHTML = "Test case 2: oddOrEven should return 'even' for even numbers <i class='fa-solid fa-x fa-xl' style='color: #ff0000;'></i>";
        testCase2.className = "testCase";
        btnDiv.appendChild(testCase2);
      }
  
  // Test case 2: oddOrEven should return "even" for even numbers
  function testEvenNumber() {
    var num = 1002;
    var result = oddOrEven(num);
    expect(result, "even");
  }
  
  // Display individual test case results on the HTML
  try {
    testOddNumber();
    var testCase1 = document.getElementById("testCase1");
    testCase1.innerHTML = "Test case 1: oddOrEven should return 'odd' for odd numbers <i class='fa-solid fa-check fa-xl' style='color: #1cf000;'></i>";
    testCase1.classList.remove("testCase");
    testCase1.classList.add("correct");
  } catch {
    var testCase1 = document.getElementById("testCase1");
    testCase1.innerHTML = "Test case 1: oddOrEven should return 'odd' for odd numbers <i class='fa-solid fa-x fa-xl' style='color: #ff0000;'></i>";
    testCase1.classList.remove("correct");
    testCase1.classList.add("testCase");

  }
  
  try {
    testEvenNumber();
    var testCase2 = document.getElementById("testCase2");
    testCase2.innerHTML = "Test case 2: oddOrEven should return 'even' for even numbers <i class='fa-solid fa-check fa-xl' style='color: #1cf000;'></i>";
    testCase2.classList.remove("testCase");
    testCase2.classList.add("correct");
  } catch {
    var testCase2 = document.getElementById("testCase2");
    testCase2.innerHTML = "Test case 2: oddOrEven should return 'even' for even numbers <i class='fa-solid fa-x fa-xl' style='color: #ff0000;'></i>";
    testCase2.classList.remove("correct");
    testCase2.classList.add("testCase");
  }
`,

code: `// Write code to return the string "odd" if 'num' is an odd number
// and return the string "even" if 'num' is an even number

var oddOrEven = function(num) {
    // * If 'num' is evenly divisible by 2, return the string "even".

    //  * If 'num' is not evenly divisible by 2, return the string "odd".
};`
};

export default oddOrEven;
