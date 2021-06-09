var input = document.querySelector("#input");
var transBtn = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(text) {
  var url = serverUrl + "?text=" + text;
  return url;
}

function handleError(error) {
  console.log("Server is down!", error);
}

function handleClickEvent() {
  // console.log(input.value);
  var url = getTranslatedUrl(input.value);
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((json) => (output.innerText = json.contents.translated))
    .catch(handleError);
}

transBtn.addEventListener("click", handleClickEvent);
