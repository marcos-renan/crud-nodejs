//importando express
import express from 'express';
//importando conector do BD
import mysql from 'mysql2';
//importando o express-handlebars
import { engine } from 'express-handlebars';

//criando varivel app
const app = express();

//bootstrap para estilizacao
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));
 
//configuracao do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//dados via rotas
app.use(express.json());
app.use(express.urlencoded({extended:false}));

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
    console.log('Conexao bem sucedida! localhost:8080');
})

//rota que renderiza pagina inicial
app.get('/', function(req, res){
    res.render('formulario');
});

//rota de cadastro
app.post('/cadastrar', function(req, res){
    console.log(req.body);
    res.end();
});

//servidor escutando porta:8000
app.listen(8080);