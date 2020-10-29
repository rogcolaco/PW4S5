var express = require("express")
var app = express();

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("Isso deveria ser um HTML");
})

app.post("/", (req, res) => {
    console.log("nome: " + req.body.nome);
    res.send("Resposta ao post");
})

app.listen(8080, function(){
    console.log("Rodando em http://localhost:8080")
});