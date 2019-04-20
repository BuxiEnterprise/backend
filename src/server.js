//require - acessa outras API ou dependencias criadas
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();

//quem pode acessar o app// todo mundo pode acessar
app.use(cors());

const server = require('http').Server(app);
const io = require("socket.io")(server);

//recebe o a conexao solicitante e connect em uma sala, onde 
//nao vera arquivos de outra pessoas.
io.on('connection', socket =>{
    socket.on('connectRoom', box =>{
        socket.join(box);
    });
});

mongoose.connect(
    "mongodb+srv://leo:2585@cluster0-av9vu.mongodb.net/BuxCloud?retryWrites=true",
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next)=> {
    req.io = io;

    return next();
});
//use - cadastrar um modulo na aplicaçao
//.json ajuda a entender a resquisiçoes que estao vindo, no formato json
app.use(express.json());
//urlencoded - permite envio de arquivos na aplicaçao
app.use(express.urlencoded({ extended: true}));
app.use('/files', express.static(path.resolve(__dirname,'..','tmp'))); 

app.use(require("./routes"));

server.listen(3333);


/* /teste -  cria no carro o nome da pasta que esta a aplicaçao
app.get - criando uma rota para um usuario acessar
app.get("/teste", (req, res) => {
    return res.send("hello world!");
    
});
app.listen(port, () => console.log("Example app listening on port "+port));
app.listen(3333);*/