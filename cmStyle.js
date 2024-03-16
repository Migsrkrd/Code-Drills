var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "dracula",
    lineWrapping: true,
    autoCloseBrackets: true,
    syntaxCheck: true,
  });

  export default editor;