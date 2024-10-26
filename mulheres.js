//Irei adicionar alguns comentários para eu não me perder no meio dos códigos

const express = require("express")  //Nesta linha eu estou iniciando o express, pegando o pacote express e guardando em uma constante

const router = express.Router() //Já nessa estou configurando a primeira parte da ROTA

const { v4: uuid4} = require('uuid') // Para chamar o uuid

const app = express() //Aqui estou chamando a função express para criar uma aplicação e guardar nessa constante app
app.use(express.json()) // Estamos tratando também as requisições, e os dados que vão trafegar a partir da requisição vão estar no formato JSON

const porta = 3333 //A definição da porta que vou usar para o localhoost


// Já nessa estou criando uma lista de mulheres que vai aparecer (Objeto)
const mulheres = [
 {
  id: '1',
   nome: 'Gretzel Penaloza',
   imagem: 'https://github.com/GretzelKattia.png',
   minibio: 'Desenvolvedora Full Stack no @Itaú Unibanco',
 },

 {
  id:'2',
   nome: 'Letícia Almeida',
   imagem: 'https://github.com/letialmeid.png',
   minibio: 'Estagiária em Produtos no @Itaú Unibanco',
 },

 {
  id: '3',
   nome: 'Gabrielle Correa',
   imagem: 'https://github.com/gabriellecorrea.png',
   minibio: 'Estudante da @FIAP',
 },

 {
  id: '4',
    nome: 'Emilly Freitas',
    imagem: 'https://github.com/EmillyMLFreitas.png',
    minibio: 'Estudante da @UFABC',
  }
]


//Esse é o meu GET - PUXAR|SOLICITAR
function mostraMulheres(request, response) {
  response.json(mulheres)
}

//Esse é o meu POST - CRIAR DADOS
function criaMulher(request,response) {
  const novaMulher = {
    id: uuid4(),
    nome: request.body.nome, //dentro da requisição, quando a pessoa preencher o nome
    imagem: request.body.imagem,
    minibio: request.body.minibio
  }

  mulheres.push(novaMulher) //queremos que a lsta mulheres receba a nova mulher

  response.json(mulheres) //que seja enviado uma resposta, que seja do formato JSON, que vai enviar a lista completa atualizada com a nova mulher

} 

//Esse é o PATCH - MODIFICAÇÃO
function corrigeMulher(request, response) {
  function encontraMulher(mulher) {
    if (mulher.id === request.params.id) {
      return mulher
    }
  }
  const mulherEncontrada = mulheres.find(encontraMulher)

  if (request.body.nome) {
    mulherEncontrada.nome = request.body.nome
  }
   if (request.body.imagem) {
    mulherEncontrada.imagem = request.body.imagem
  }
   if (request.body.minibio) {
    mulherEncontrada.minibio = request.body.minibio
  }

  response.json(mulheres)

}

//Esse é meu DELETE - DELETAR
function deletaMulher(request,response) {
  function todasMenosEla(mulher) {
    if (mulher.id !== request.params.id) {
      return mulher
    }
  }

  const mulherQueFicam = mulheres.filter(todasMenosEla) 

  response.json(mulherQueFicam)

}

//Essa é a função resposavel por me avisar que a porta foi definida por meio do console
function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get('/mulheres', mostraMulheres)) //Configurei a rota GET /mulheres

app.use(router.post('/mulheres', criaMulher)) //Configurei a rota POST /mulheres

app.use(router.patch('/mulheres/:id', corrigeMulher)) //Configurei a rota PATCH /mulheres/:id

app.use(router.delete('/mulheres/:id', deletaMulher)) //Configurei a rota DELETE /mulheres/:id 

app.listen(porta, mostraPorta) //Esse aqui faz o computador entender que o app precisa ESCuTAR (chamar a função listen), informado no endereço da porta e o identificador da função mostrar porta - SERVIDOR

// [
// 	{
// 		"id": "1",
// 		"nome": "Gretzel Penaloza",
// 		"imagem": "https://github.com/GretzelKattia.png",
// 		"minibio": "Desenvolvedora Full Stack no @Itaú Unibanco"
// 	},
// 	{
// 		"id": "2",
// 		"nome": "Letícia Almeida",
// 		"imagem": "https://github.com/letialmeid.png",
// 		"minibio": "Estagiária em Produtos no @Itaú Unibanco"
// 	},
// 	{
// 		"id": "3",
// 		"nome": "Gabrielle Correa",
// 		"imagem": "https://github.com/gabriellecorrea.png",
// 		"minibio": "Estudante da @FIAP"
// 	},
// 	{
// 		"id": "4",
// 		"nome": "Emilly Freitas",
// 		"imagem": "https://github.com/EmillyMLFreitas.png",
// 		"minibio": "Estudante da @UFABC"
// 	},
// 	{
// 		"id": "511f7f24-14e4-4905-83ec-a589eb213be4",
// 		"nome": "Júlia Lima",
// 		"imagem": "https://github.com/JJuliaLima.png",
// 		"minibio": "Desenvolvedora Front-End"
// 	},
// 	{
// 		"id": "2fa91843-dda5-42a8-9077-f5bd35bbf2e6",
// 		"nome": "Celina Lozanop",
// 		"imagem": "https://github.com/Celina22w.png",
// 		"minibio": "Desenvolvedora Front-End"
// 	},
// 	{
// 		"id": "54f851eb-21cd-4ee2-8f4a-02a1ea8a68e1",
// 		"minibio": "Desenvolvedora Full Stack"
// 	}
// ]