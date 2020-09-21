const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    formacao: { type: String, required: true },
    data_nascimento: { type: Date, required: true },
    // CPF com índice único para evitar duplicidade
    cpf: { type: String, required: true, index: { unique: true } },
    rg: { type: String, required: true },
    valor_hora_aula: { type: Number, required: true, default: 20.15 },
    endereco: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } }
})

// Parâmetros do mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> A constante esquema, montada anteriormente
// 3º -> o nome da coleção no banco de dados que irá receber os objetos que serão criados 
// a partir deste model(inicial minúscula, plural do nome, nome do model)
module.exports = mongoose.model('Professor', esquema, 'professores')