function onTypeInEditor()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}



function setupEditor()
{
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(`<!DOCTYPE html>
<html>
<head>

</head>
<body>

</body>
</html>`,1); //1 = moves cursor to end

  editor.getSession().on('change', function() {
    onTypeInEditor();
  });

  // Set Options
  editor.setOptions({
    enableSnippets: true,
    fixedWidthGutter: true,
    highlightGutterLine: true,
    animatedScroll: true,
    cursorStyle: "smooth",
    wrap: true,
    autoScrollEditorIntoView: true,
    highlightSelectedWord: true,
    highlightActiveLine: true,
    fontSize: "16pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
  });

  editor.setShowPrintMargin(false);
}

setupEditor();
update();
