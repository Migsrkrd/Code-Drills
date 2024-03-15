import data from "./codeDrills.js";
import editor from "./cmStyle.js";

var generate = document.getElementById("generate");

generate.addEventListener("click", function () {
  document.getElementById("mocha").innerHTML = "";
  var random = Math.floor(Math.random() * data.length);
  editor.setValue(data[random].code); // Use setValue instead of textContent

  if (document.getElementById("testBtn")) {
    document.getElementById("testBtn").remove();
  }

  var runBtn = document.createElement("button");
  runBtn.textContent = "Run";
  runBtn.id = "testBtn";

  var btnDiv = document.getElementById("btnDiv");
  btnDiv.appendChild(runBtn);

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
});










