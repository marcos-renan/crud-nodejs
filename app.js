//importando express
import express from 'express';
//importando conector do BD
import mysql from 'mysql2';
//importando o express-handlebars
import { engine } from 'express-handlebars';

//criando varivel app
const app = express();
 
//configuracao do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

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

//rota que renderiza pagina inicial
app.get('/', function(req, res){
    res.render('formulario');
});

//servidor escutando porta:8000
app.listen(8080);