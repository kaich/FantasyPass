let url = "https://raw.githubusercontent.com/kaich/FantasyPass/master/example.json"

let params = {
  method: "get",
  headers:  {
   "Content-Type": "application/json"
 }
}


$.fetch(url, params, function(responseString) {
    let json = JSON.parse(responseString)
    let code = json.results[0].imdbID
    FPFormJSBridge.appendRow("Active Code", 3, "FPLabelRow", "code", code)
    $.toast("JS执行完成，已新增一行")
    $.setPasteboard(code)
});
