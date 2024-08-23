const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const query = require("query");


const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'cantina'
});

const create = (req, res) => {
    let nome = req.query.nome;
    let fornecedor= req.query.fornecedor;
    let descricao = req.query.descricao;
    let preco =  req.query.preco;
    let custo =  req.query.custo;

    let query = `INSERT INTO Clientes (fornecedor,nome, descricao, preco, custo) VALUE`;
    query += `('${fornecedor}', '${nome}', '${decricao}', '${preco}', '${custo}')`;

    con.query(query, (err, result) => {
        if (err) {

            console.log("Erro ao cadastrar um cliente");
        } else {
            console.log("Cliente cadastrado com sucesso");
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
app.post("/clientes", create);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})