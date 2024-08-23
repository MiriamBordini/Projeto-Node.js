const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyparser = require("body-parser");


const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'biblioteca'
});

const create = (req, res) => {
    let nome = req.body.nome;
    let autor= req.body.autor;
    let descricao = req.body.descricao;
    let livro =  req.body.livro;

    let query = `INSERT INTO Alunos (autor,nome, descricao, livro) VALUE`;
    query += `('${autor}', '${nome}', '${decricao}', '${livro}')`;

    con.query(query, (err, result) => {
        if (err) {

            console.log("Erro ao cadastrar um aluno");
        } else {
            console.log("Aluno cadastrado com sucesso");
        }
    })
}
const teste = (req, res) => {
    console.log("Funcionando");
}

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", teste);
app.post("/alunos", create);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})