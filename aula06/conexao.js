const { connect } = require("http2");

async function conecta(){
    //func vai criar conexao se nao existir

    console.log("Conectando com o Banco de dados");
    const banco = require("mysql2/promise");
    const con = await banco.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "aula"
    });

    console.log("Banco de dados conectado");
    return con;
}

async function listaTodos(){
    console.log("Listando todos os alunos");
    const conexaoAtiva = await conecta();
    const [resultado] = await conexaoAtiva.query("select * from alunos");
    return resultado;
}

async function insereAluno(aluno){
    console.log("Inserindo o aluno: " + aluno.nome);
    const conexaoAtiva = await conecta();
    const sql = "INSERT INTO alunos (nome, senha, idade) VALUES (?, ?, ?);";
    const parametros=[aluno.nome, aluno.senha, aluno.idade];
    return await conexaoAtiva.query(sql, parametros);
}

module.exports= {listaTodos, insereAluno}