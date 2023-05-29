// Función de encriptar //

function encrypt() {
    var textInput = document.querySelector("#userText").value;
    var textEncrypt = textInput.replace(/[aeiou]/gi, function(match) {
        switch (match.toLowerCase()) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return match;
        }
    });
    document.querySelector(".text-result").value = textEncrypt;
}

var btnEncrypt = document.querySelector("#btn-encrypt");
btnEncrypt.addEventListener("click", encrypt);

// Función de desencriptar //

function decrypt() {
    var textInput = document.querySelector("#userText").value;
    var textDecrypt = textInput.replace(/ai|enter|imes|ober|ufat/gi, function(match) {
        switch (match.toLowerCase()) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return match;
        }
    });
    document.querySelector(".text-result").value = textDecrypt;
}

var btnDecrypt = document.querySelector("#btn-decrypt");
btnDecrypt.addEventListener("click", decrypt);

// función que oculta el main results y muestra el textarea con el texto encriptado o desencriptado y los botones de copiar y pegar//


var textResult = document.querySelector("#textResult");
var copyFun = document.querySelector("#btn-copy");
var pasteFun = document.querySelector("#btn-paste");

textResult.style.display = "none";
copyFun.style.display = "none";
pasteFun.style.display= "none";

function showResults() {
  textResult.style.display = "block";
  copyFun.style.display = "block";
}

function showBtnPaste() {
    pasteFun.style.display= "block";
}

var btnEncrypt = document.querySelector("#btn-encrypt");
btnEncrypt.addEventListener("click", showResults);

var btnCopy = document.querySelector("#btn-copy");
btnCopy.addEventListener("click", showBtnPaste);

// Función del botón para copiar
function copyText() {
    var textInputCopy = document.querySelector("#textResult").value;
    navigator.clipboard.writeText(textInputCopy);
  }
  
  var btnCopy = document.querySelector("#btn-copy");
  btnCopy.addEventListener("click", copyText);
  
  // Función de pegar
  function pasteText() {
    navigator.clipboard.readText().then(function(textInputPaste) {
      var userTextArea = document.querySelector("#userText");
      userTextArea.value = textInputPaste;
    }).catch(function(error) {
      console.error("Error al pegar el texto:", error);
    });
  }
  
  var btnPaste = document.querySelector("#btn-paste");
  btnPaste.addEventListener("click", pasteText);