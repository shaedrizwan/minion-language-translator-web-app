var buttonTranslate = document.querySelector("#btn-translate");
var ipText = document.querySelector("#inputText");
var outputField = document.querySelector("#output");

var sourceURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return sourceURL + "?text=" + input;
}

function clickHandler() {
    var textIp = ipText.value;
    fetch(getTranslationURL(textIp))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputField.innerText = translatedText; // output
           })

}

buttonTranslate.addEventListener("click",clickHandler);