const express = require("express");
const router = express.Router();

const app = express()

const porta = 3333;


// Associar nossa função em um verbo (no caso mostraMulher)
function mostraMulher(request, response) {
    response.json({
        nome: 'Gretzel Penaloza',
        imagem: 'https://github.com/GretzelKattia.png',
        minibio: 'Desenvolvedora Full Stack'
    })
    //Forma de enviar pela internet, várias informações organizadas, já que pretendemos mandar como objeto. Por isso a escolha desse formato
    
}

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta", porta);
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta,mostrarPorta);