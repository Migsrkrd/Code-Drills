import data from './codeDrills.js';

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "dracula", // Use the Monokai theme
    lineWrapping: true,
  });

var generate = document.getElementById("generate");
var code = document.getElementById("code");

generate.addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * data.length);
    editor.setValue(data[randomNum].code);
});