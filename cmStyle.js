var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "dracula",
    lineWrapping: true,
  });

  export default editor;