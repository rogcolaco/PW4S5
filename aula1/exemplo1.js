var express = require('express');
var app = express();


app.use("/html", express.static("html"));

function trataIndex (req, res) {
  res.send("Olá, mas isso aqui está no .js");
}


function trataSobre (req, res) {
  res.send("resposta para a resquisição no caminho /sobre");
}


app.get('/', trataIndex);
app.get("/sobre", trataSobre);

app.listen(8080, function () {
  console.log("Rodando na porta 8080");
});