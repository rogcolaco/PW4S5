var express = require("express");
var app = express();

const {body, validationResult} = require("express-validator");

app.get("/", (req, res) => {
    console.log("Listagem geral de todos os cadastrdos");
    res.send("Aqui deveria haver uma listagem...");
});

app.listen(8080, function(){
    console.log("Executando o servidor em http://127.0.0.1:8080")
});