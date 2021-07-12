function run() {
  let htmlCode = document.querySelector(".code-area #html-code").value;
  let output = document.querySelector(".preview-area #output");
  output.contentDocument.body.innerHTML = htmlCode;
}
document.querySelector(".code-area #html-code").addEventListener("keyup",run)
