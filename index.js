import data from "./codeDrills.js";
import editor from "./cmStyle.js";

function createTestRunner(random) {
  // Remove existing test button if it exists
  if (document.getElementById("testBtn")) {
    document.getElementById("testBtn").remove();
  }

  // Create a new test button
  var runBtn = document.createElement("button");
  runBtn.textContent = "Run";
  runBtn.id = "testBtn";

  // Append the test button to the btnDiv
  var btnDiv = document.getElementById("btnDiv");
  btnDiv.appendChild(runBtn);

  // Add click event listener to the test button
  runBtn.addEventListener("click", function () {
    var test = data[random].test;

    // Clear the previous test results
    document.getElementById("mocha").innerHTML = "";

    // Remove any existing Mocha setup
    var mochaScript = document.querySelector("script[src^='https://cdnjs.cloudflare.com/ajax/libs/mocha/']");
    if (mochaScript) {
      mochaScript.remove();
    }

    // Initialize Mocha
    var mochaScript = document.createElement("script");
    mochaScript.src = "https://cdnjs.cloudflare.com/ajax/libs/mocha/5.2.0/mocha.min.js";
    document.head.appendChild(mochaScript);

    mochaScript.onload = function() {
      // Run Mocha for the current test
      mocha.setup("bdd");
      try {
        eval(editor.getValue() + test);
        mocha.run();
      } catch (error) {
        // Display syntax error message in bright red
        var errorElement = document.createElement("div");
        errorElement.innerText = "Syntax Error: " + error.message;
        errorElement.style.color = "#ff0000"; // Bright red color
        document.getElementById("mocha").appendChild(errorElement);
      }
    };
  });
}

var generate = document.getElementById("generate");

generate.addEventListener("click", function () {
  document.getElementById("mocha").innerHTML = "";
  var random = Math.floor(Math.random() * data.length);
  editor.setValue(data[random].code); // Use setValue instead of textContent

  // Call the createTestRunner function after generating a random code drill
  createTestRunner(random);
});


function modalWork(){

  for (var i = 0; i < data.length; i++) {
    var ul = document.getElementById("modalList");

    var li = document.createElement("li");
    li.id = "modalItem";
    li.textContent = data[i].title;
    ul.appendChild(li);
  }

  ul.addEventListener("click", function (e) {
    var target = e.target;
    var index = Array.from(target.parentElement.children).indexOf(target);
    editor.setValue(data[index].code);
    createTestRunner(index);
    modal.style.display = "none";
    // Re-enable pointer events on other elements when modal is closed
    document.querySelectorAll("body > *:not(#modal)").forEach(function(element) {
      element.style.pointerEvents = "auto";
    });
  });
}

 modalWork();


// var dropIcon = document.getElementById("dropIcon");

// console.log("dropIcon:", dropIcon); // Log the dropIcon variable to check its value

// dropIcon.addEventListener("click", function () {
//   console.log("Icon clicked!"); // Log a message to check if the event listener is triggered
//   modalWork();
// });
















