// importando express
import express from 'express';

//criando varivel app
const app = express();

//rota hello world do tipo get
app.get('/', function(req, res){
    res.write('Hello Marcos, you is my world!');
    res.end();
});

//servidor escutando porta:8000
app.listen(8080);