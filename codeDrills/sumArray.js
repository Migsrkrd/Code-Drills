var sumArray = {
    code: `// Write code to add all the numbers in 'arr' and return the total

    var sumArray = function(arr) {};`,
    test: `// Define the sumArray function
    function sumArray(arr) {
      return arr.reduce((acc, curr) => acc + curr, 0);
    }

    if(!document.getElementById("testCase1")) {
        var testCase1 = document.createElement("p");
        testCase1.id = "testCase1";
        testCase1.innerHTML = "Test case 1: sumArray should return sum <i class='fa-solid fa-x fa-xl' style='color: #ff0000;'></i>";
        testCase1.className = "testCase";
        btnDiv.appendChild(testCase1);
    }
    
    // Define the test function
    function testSumArray() {
      var arr = [4, 8, 15, 16, 23, 42];
      var expectedResult = 108;
    
      var result = sumArray(arr);
    
      if (result === expectedResult) {
        var testCase1 = document.getElementById("testCase1");
        testCase1.innerHTML = "Test case 1: sumArray should return sum <i class='fa-solid fa-check fa-xl' style='color: #1cf000;'></i>";
        testCase1.classList.remove("testCase");
        testCase1.classList.add("correct");
      } else {
        var testCase1 = document.getElementById("testCase1");
        testCase1.innerHTML = "Test case 1: sumArray should return sum <i class='fa-solid fa-x fa-xl' style='color: #ff0000;'></i>";
        testCase1.classList.remove("correct");
        testCase1.classList.add("testCase");
      }
    }
    
    // Run the test
    testSumArray();
`
}

export default sumArray;