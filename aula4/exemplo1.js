var express = require("express")
var app = express();

const {body, validationResult} = require("express-validator");

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("Isso deveria ser um HTML");
})

app.get("/testeRota", (req, res) => {
    res.send("teste deu certo");
})

app.post("/", 
    [ body("email", "acertar esse e-mail").isEmail() , 
    body("senha", "A senha precisa de pelo menos 5 digitos").isLength({min: 5})],
    (req, res) => {
        const erros = validationResult(req);
        if(!erros.isEmpty()){
            res.send(erros.array());
        }
        res.send("tudo certo");
        console.log("nome: " + req.body.nome);
        res.send("Resposta ao post");
})

app.listen(8080, function(){
    console.log("Rodando em http://localhost:8080")
});