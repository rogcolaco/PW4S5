var express = require('express');
var app = express();


function trataIndex (req, res) {
  res.send("OlÃ¡, mas isso aqui estÃ¡ no .js");
}


function trataSobre (req, res) {
  res.send("resposta para a resquisiÃ§Ã£o no caminho /sobre");
}


app.get('/', trataIndex);
app.get("/sobre", trataSobre);

app.listen(8080, function () {
  console.log("Rodando na porta 8080");
});