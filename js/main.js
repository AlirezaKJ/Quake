function run() {
  let htmlCode = document.querySelector(".code-area #html-code").value;
  let cssCode = "<style>"+document.querySelector(".code-area #css-code").value+"</style>";
  let jsCode = document.querySelector(".code-area #js-code").value;
  let output = document.querySelector(".preview-area #output");
  console.log(htmlCode,cssCode,jsCode,output);
  output.contentDocument.body.innerHTML = htmlCode+cssCode;
  output.contentWindow.eval(jsCode);
}
document.querySelector(".code-area #html-code").addEventListener("keyup",run)
document.querySelector(".code-area #css-code").addEventListener("keyup",run)
document.querySelector(".code-area #js-code").addEventListener("keyup",run)
