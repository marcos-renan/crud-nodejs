//importando express
import express from 'express';
//importando conector do BD
import mysql from 'mysql2';

//criando varivel app
const app = express();

//conexao com o BD
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'crudnode'
});

//teste de conexao
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Conexao bem sucedida!');
})

//rota hello world do tipo get
app.get('/', function(req, res){
    res.write('Hello Marcos, you is my world!');
    res.end();
});

//servidor escutando porta:8000
app.listen(8080);