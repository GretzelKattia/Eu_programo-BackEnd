const express = require("express") 

const router = express.Router()

const app = express()

const porta = 3333



const mulheres = [

 {

   nome: 'Gretzel Penaloza',

   imagem: 'https://github.com/GretzelKattia.png',

   minibio: 'Desenvolvedora Full Stack no @Itaú Unibanco',

 },

 {

   nome: 'Letícia Almeida',

   imagem: 'https://github.com/letialmeid.png',

   minibio: 'Estagiária em Produtos no @Itaú Unibanco',

 },

 {

   nome: 'Gabrielle Correa',

   imagem: 'https://github.com/gabriellecorrea.png',

   minibio: 'Estudante da @FIAP',

 },

 {

    nome: 'Emilly Freitas',
 
    imagem: 'https://github.com/EmillyMLFreitas.png',
 
    minibio: 'Estudante da @UFABC',
 
  }

]



function mostraMulheres(request, response) {

response.json(mulheres)

}



function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}



app.use(router.get('/mulheres', mostraMulheres))

app.listen(porta, mostraPorta)