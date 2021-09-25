function onTypeInEditor()
{
	var idoc = document.getElementById('iframe').contentWindow.document;
	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}

function openNav() {document.getElementById("mySidenav").style.width = "250px";}
function closeNav() {document.getElementById("mySidenav").style.width = "0";}
function openNav2() {document.getElementById("mySidenav2").style.width = "250px";}
function closeNav2() {document.getElementById("mySidenav2").style.width = "0";}
function openNav3() {document.getElementById("mySidenav3").style.width = "250px";}
function closeNav3() {document.getElementById("mySidenav3").style.width = "0";}
function openNav4() {document.getElementById("mySidenav4").style.width = "250px";}
function closeNav4() {document.getElementById("mySidenav4").style.width = "0";}
function openNav5() {document.getElementById("mySidenav5").style.width = "250px";}
function closeNav5() {document.getElementById("mySidenav5").style.width = "0";}

function wrappingOn() {editor.setOptions({wrap: true})}
function wrappingOff() {editor.setOptions({wrap: false});}
function cursortoace() {editor.setOptions({cursorStyle: "ace"})}
function cursortoslim() {editor.setOptions({cursorStyle: "slim"})}
function cursortosmooth() {editor.setOptions({cursorStyle: "smooth"})}
function cursortowide() {editor.setOptions({cursorStyle: "wide"})}
function fontsizeto10() {editor.setOptions({fontSize: "10pt"})}
function fontsizeto12() {editor.setOptions({fontSize: "12pt"})}
function fontsizeto14() {editor.setOptions({fontSize: "14pt"})}
function fontsizeto16() {editor.setOptions({fontSize: "16pt"})}
function fontsizeto18() {editor.setOptions({fontSize: "18pt"})}
function fontsizeto20() {editor.setOptions({fontSize: "20pt"})}
function fontsizeto22() {editor.setOptions({fontSize: "22pt"})}
function fontsizeto24() {editor.setOptions({fontSize: "24pt"})}
function snippetsoff() {editor.setOptions({
  enableSnippets: false,
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false
})}
function snippetson() {editor.setOptions({
  enableSnippets: true,
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true
})}

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

  editor.setShowPrintMargin(false);
  editor.setTheme("ace/theme/monokai");
}


function themetotwilight() {editor.setTheme("ace/theme/twilight");}
function themetomonokai() {editor.setTheme("ace/theme/monokai");}
function themetocobalt() {editor.setTheme("ace/theme/cobalt");}
function themetodracula() {editor.setTheme("ace/theme/dracula");}
function themetogithub() {editor.setTheme("ace/theme/github");}
function themetosolarized_dark() {editor.setTheme("ace/theme/solarized_dark");}
function themetosolarized_light() {editor.setTheme("ace/theme/solarized_light");}
function themetochaos() {editor.setTheme("ace/theme/chaos");}
function themetochrome() {editor.setTheme("ace/theme/chrome");}
function themetoclouds_mn() {editor.setTheme("ace/theme/clouds_midnight");}
function themetotomorrow() {editor.setTheme("ace/theme/tomorrow");}
function themetotomorrow_n() {editor.setTheme("ace/theme/tomorrow_night");}

setupEditor();
update();
