//Criar modelo
const mongoose = require('mongoose')

// A gente vai definir que é um objeto utilizando aqui mais uma abstração que é o Mongoose 
//função Schama
const MulheresSchema = new mongoose.Schema({
    //Tem essa chaves porque é um objeto

    //Propriedade nome
    nome: {
        type: String, //Tipo de informação
        require: true //Se é obrigatória o preenchimento
    },
    //Propriedade imagem
    imagem: {
        type: String,
        require: true
    },
    //Propriedade citação
    citacao: {
        type: String,
        require: true
    },
    //Propriedade minibio
    minibio: {
        type: String,
        require: true
    }
})
//Nesse estilo, vamos ter o contrato que o front-end para mandar essas informações com esse formato. Se ele não seguir direitinho esses passos vai acontecer um erro, e o objeto mulher não vai ser criado na hhora da requisição

module.exports = mongoose.model('diva', MulheresSchema)
//Vamos exportar utilizando uma abstração do mongoose 