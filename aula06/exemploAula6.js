var express = require("express");
var app = express();

const {body, validationResult} = require("express-validator");
const {read} = require("fs");

app.use(express.urlencoded({extended:true}));

app.get("/", async (req, res) => {
    console.log("Listagem geral de todos os cadastrdos");
    const banco = require("./conexao");
    const alunos = await banco.listaTodos();
    res.send(alunos);
});

app.post("/", [
    body("senha","A senha precisa ter pelo menos 6 dígitos").isLength({min: 6}),
    body("nome").trim()
],
     async (req, res) => {
        console.log("inserindo o aluno: "+req.body.nome);
        const erros = validationResult(req);
        if(!erros.isEmpty()){
            res.send(erros.array());
        } else {
            const banco = require("./conexao");
            const resultado = await banco.insereAluno({
                nome: req.body.nome,
                senha: req.body.senha,
                idade: req.body.idade
            });
            res.send(resultado);
        }
    });

app.listen(8080, function(){
    console.log("Executando o servidor em http://127.0.0.1:8080")
});