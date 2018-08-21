let url = "https://raw.githubusercontent.com/kaich/FantasyPass/master/example.json"

fetch(url).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let code = myJson.results[0].imdbID
    console.log(code);
    FPFormJSBridge.insrtSectionRow("jihuo", "test", 1)
    FPFormJSBridge.appendLabelRow("激活码", code, "jihuo")
  });
