import express from 'express';
import {auth} from './middlewares/auth.middleware.js'

const app = express();
const PORT = 3000;
const __dirname = import.meta.dirname;
let numAleatorio;

export const usuarios = [
    "Cristian",
    "Judith",
    "Ignacio",
    "Francisco",
    "Maria",
    "Pablo",
    "Joaquin",
    "Melanie",
    "Stanka",
    "Benjamin",
    "Bastian",
    "Diego",
    "Pamela"
]

app.use(express.static("assets"));

app.get('/abracadabra/usuarios', (req, res) => {
    res.status(200).json(usuarios);
})

app.get('/abracadabra/juego/:usuario', auth, (req, res) => {
    const num = Math.round(Math.random()*4);
    numAleatorio = num;
    res.sendFile(__dirname + '/index.html')
})

app.get('/abracadabra/conejo/:n', (req, res) => {
    if(numAleatorio == req.params.n){
        res.sendFile(__dirname + '/assets/conejito.jpg')
    }else{
        res.sendFile(__dirname + '/assets/voldemort.jpg')
    }
})

app.get('*', (req,res) => {
    res.status(404).send('La pagina consultada no existe');
})

app.listen(PORT, () => {
    console.log('Servidor andando en http://localhost:' + PORT);
});