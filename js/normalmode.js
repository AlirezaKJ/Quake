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
    wrap: false,
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
  editor.focus();
  editor.setShowPrintMargin(false);
  editor.setTheme("ace/theme/monokai");
}

function openNav(navnum) {document.getElementById("mySideNav" + navnum).style.width = "250px"}
function closeNav(navnum) {document.getElementById("mySideNav" + navnum).style.width = "0px"}
function wrapping(state) {editor.setOptions({wrap: state})}
function cursorTo(cursor) {editor.setOptions({cursorStyle: cursor})}
function fontSizeTo(size) {editor.setOptions({fontSize: size})}
function setSnippet(state) {editor.setOptions({enableSnippets: state,enableBasicAutocompletion: state,enableLiveAutocompletion: state,})}
function setThemeTo(theme) {editor.setTheme("ace/theme/" + theme)}

setupEditor();
update();