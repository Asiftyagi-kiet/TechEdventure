//input-----------
function showPreview(){
  document.querySelector("#run-btn").addEventListener("click", function()
  {


  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "<style>"+document.getElementById("cssCode").value+"</style>";
  
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode+cssCode);
  frame.close();
});
}

//copy text html code----------
function htmlcodecopy() {
  
  var copyText = document.getElementById("htmlCode");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  window.confirm(copyText.value);
}


//copy text css code-----------
function csscodecopy() {
  
  var copyText = document.getElementById("cssCode");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
    confirm(copyText.value);
}