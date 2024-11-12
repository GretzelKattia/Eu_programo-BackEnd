//Irei adicionar alguns comentários para eu não me perder no meio dos códigos

const express = require("express")  //Nesta linha eu estou iniciando o express, pegando o pacote express e guardando em uma constante

const router = express.Router() //Já nessa estou configurando a primeira parte da ROTA

const cors = require('cors') // Estou trazendo o pacote cors, que permite instalar/consumir essa API no front-end

const conectaBancoDeDados = require('./bancoDeDados') // Aqui estou ligando ao arquivo BancoDeDados.js
conectaBancoDeDados() //Estouy chamando a função que conecat o banco de dados
//Não tava rodando porque esqueci dos parenteses, bobona

const Mulher = require('./mulherModel') // Aqui tenho a abstração que me diz a regra da criação e a conexão do banco de dados do objeto Mulher

const app = express() //Aqui estou chamando a função express para criar uma aplicação e guardar nessa constante app
app.use(express.json()) // Estamos tratando também as requisições, e os dados que vão trafegar a partir da requisição vão estar no formato JSON
app.use(cors()) //Pra conseguir usar o cors, precisamos chamar a função para que libera o corn dentro do meu servidor. Onde eu liero o JSON para trafego de dados na REQUEST


const porta = 3333 //A definição da porta que vou usar para o localhoost


// // Já nessa estou criando uma lista de mulheres que vai aparecer (Objeto)
// const mulheres = [
//  {
//   id: '1',
//    nome: 'Gretzel Penaloza',
//    imagem: 'https://github.com/GretzelKattia.png',
//    minibio: 'Desenvolvedora Full Stack no @Itaú Unibanco',
//  },

//  {
//   id:'2',
//    nome: 'Letícia Almeida',
//    imagem: 'https://github.com/letialmeid.png',
//    minibio: 'Estagiária em Produtos no @Itaú Unibanco',
//  },

//  {
//   id: '3',
//    nome: 'Gabrielle Correa',
//    imagem: 'https://github.com/gabriellecorrea.png',
//    minibio: 'Estudante da @FIAP',
//  },

//  {
//   id: '4',
//     nome: 'Emilly Freitas',
//     imagem: 'https://github.com/EmillyMLFreitas.png',
//     minibio: 'Estudante da @UFABC',
//   }
// ]


//Esse é o meu GET - PUXAR|SOLICITAR
async function mostraMulheres(request, response) {
  try {
    const MulheresVindasDoBancoDeDados = await Mulher.find() //Guardar informações que estão vindo do banco de dados. 
    //Eu estou esperando a conexão, e quando ela acontecer eu quero buscar todas as mulheres que eu tenho na minha lista de DIVAS
    response.json(MulheresVindasDoBancoDeDados)
    //Se tudo isso der certo, eu vou enviar uma resposta, por meio de um JSON. Que justamnete vão ser as mulheres que vieram do meu banco de dados.
  } catch (error) {
    console.log(error);
    
  }
}

//Esse é o meu POST - CRIAR DADOS
//então conseguimos fazer a criação da mulher de forma integrada ao banco de dados
async function criaMulher(request,response) {
  const novaMulher = new Mulher({
    nome: request.body.nome, //dentro da requisição, quando a pessoa preencher o nome
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao
  })



try {

  const mulherCriada = await novaMulher.save()
  //Abstração para fazer o POST, criando uma NovaMulher, e eu preciso esperar por que estou me comunicando com o serviço externo
  //E quem é essa nova mulher? Esse objeto que estou criando no corpo da requisição.
 // E onde stou guardando essa informação nova? Nessa constante mulherCriada. 

 //201 - RESPOSTA CIADA
  response.status(201).json(mulherCriada)
  //E é justamente ela que eu vou mandar como resposta para o servidor para as pessoas terem certeza que aconteceu com sucesso a criação dessa nova mulher

} catch (erro) {

  console.log(erro)

}

} 

//Esse é o PATCH - MODIFICAÇÃO
async function corrigeMulher(request, response) {
  try {
    const mulherEncontrada = await Mulher.findById(request.params.id)
    //Quero esperar, trazer no banco de dados. Encontrar uma mulher pelo id, eno parametro preciso informar esse id na hora da requisição


    //TROUXE AS LINHAS BAIXO PARA DENTRO DO TRY
    if (request.body.nome) {
      mulherEncontrada.nome = request.body.nome
    }
     if (request.body.imagem) {
      mulherEncontrada.imagem = request.body.imagem
    }
     if (request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio
    }
    if (request.body.citacao) {
      mulherEncontrada.minibio = request.body.citacao
    }

    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()

    response.json(mulherAtualizadaNoBancoDeDados)

  } catch(error) {
    console.log(error)
  }

}

//Esse é meu DELETE - DELETAR
async function deletaMulher(request,response) {
  try {
    await Mulher.findByIdAndDelete(request.params.id)
    //Aqui vamos encontrar a mulher que queremos deletar a partir do Id dela
    response.json({mensagem : 'Mulher deletada com sucesso!'})
    //Aqui conseguimos mandar uma mensagem como resposta para essa requisição 
  } catch (error) {
    console.log(error)
  }

  

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