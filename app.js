var input = document.querySelector("#input");
var transBtn = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslatedUrl(text) {
  var url = serverUrl + "?text=" + text;
  return url;
}

function handleClickEvent() {
  // console.log(input.value);
  var url = getTranslatedUrl(input.value);
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json.contents.text));
}

transBtn.addEventListener("click", handleClickEvent);
