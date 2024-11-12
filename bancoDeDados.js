const mongoose = require('mongoose')

require('dotenv').config()

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou') //primeiro essa mensagem

        await mongoose.connect(process.env.MONGO_URL) //quando tentar conectar, espera

        console.log('Conexão com o banco de dados feita com sucesso!')  //Logo em seguida traz essa mensagem que a conezão foi um sucesso
    } catch (error) {
        console.log(error)       
    }
}

module.exports = conectaBancoDeDados