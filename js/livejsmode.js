// Retrieve Elements
const consoleLogList = document.querySelector('.editor__console-logs');
// const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCode = `// Welcome To Live JS From Quake
// From Now If You Type Anything It Will Get Runned In The Console Instantly
console.log("Hello World")
`;
let consoleMessages = [];

let editorLib = {
    clearConsoleScreen() {
        consoleMessages.length = 0;

        // Remove all elements in the log list
        while (consoleLogList.firstChild) {
            consoleLogList.removeChild(consoleLogList.firstChild);
        }
    },
    printToConsole() {
        consoleMessages.forEach(log => {
            const newLogItem = document.createElement('li');
            const newLogText = document.createElement('pre');

            newLogText.className = log.class;
            newLogText.textContent = `> ${log.message}`;

            newLogItem.appendChild(newLogText);

            consoleLogList.appendChild(newLogItem);
        })
    },
    init() {
        // Configure Ace
        codeEditor.setTheme("ace/theme/monokai");
        codeEditor.session.setMode("ace/mode/javascript");
        codeEditor.setOptions({
            cursorStyle: 'smooth',
            fontSize: '21pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });
        codeEditor.focus()
        // Set Default Code
        codeEditor.setValue(defaultCode,1);
    }
}
codeEditor.getSession().on('change', function() {
    onTypeInEditor();
});



function onTypeInEditor() {
    // Clear console messages
    editorLib.clearConsoleScreen();
    
    // Get input from the code editor
    const userCode = codeEditor.getValue();

    // Run the user code
    try {
        new Function(userCode)();
    } catch (err) {
        console.error(err);
    }

    // Print to the console
    editorLib.printToConsole();
}
// Events
// executeCodeBtn.addEventListener('click', () => {
//     // Clear console messages
//     editorLib.clearConsoleScreen();
    
//     // Get input from the code editor
//     const userCode = codeEditor.getValue();

//     // Run the user code
//     try {
//         new Function(userCode)();
//     } catch (err) {
//         console.error(err);
//     }

//     // Print to the console
//     editorLib.printToConsole();
// });

resetCodeBtn.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(`// Cleared`);
    codeEditor.focus()

    // Clear console messages
    editorLib.clearConsoleScreen();
})

editorLib.init();
onTypeInEditor();