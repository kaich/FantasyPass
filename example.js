let url = "https://raw.githubusercontent.com/kaich/FantasyPass/master/example.json"

FPFormJSBridge.fetch(url, {}, function(responseString) {
    let json = JSON.parse(responseString)
    let code = json.results[0].imdbID
    console.log(code);
    FPFormJSBridge.appendRow("Active Code", 3, "FPLabelRow", "code", code)
  });
