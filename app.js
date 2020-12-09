var btntranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#inputText");
var outputText = document.querySelector("#output");


var serverUrl = "https://api.funtranslations.com/translate/minion.json";
function getTranslationUrl(input) {
    return serverUrl + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured: "+ error);
}

function clickHandler() {
    var inputTxt = textInput.nodeValue;

    fetch(getTranslationUrl(inputTxt))
        .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
        .catch(errorHandler)
}

btntranslate.addEventListener("click", clickHandler);