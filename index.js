import data from "./codeDrills.js";
import editor from "./cmStyle.js";

var generate = document.getElementById("generate");

generate.addEventListener("click", function () {
  var random = Math.floor(Math.random() * data.length);
  editor.setValue(data[random].code); // Use setValue instead of textContent
  
  if (document.getElementById("testBtn")){
    document.getElementById("testBtn").remove();
  }

  var runBtn = document.createElement("button");
  runBtn.textContent = "Run";
  runBtn.id = "testBtn";

  var btnDiv = document.getElementById("btnDiv");
  btnDiv.appendChild(runBtn);

  runBtn.addEventListener("click", function () {
    var test = data[random].test;
    eval(editor.getValue() + test);
  }
  );

});



