const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    capacidade: { type: Number, required: true, default: 15, min: 5, max: 25 },
    recursos_didaticos: { type: String }
})

// Parâmetros do mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> A constante esquema, montada anteriormente
// 3º -> o nome da coleção no banco de dados que irá receber os objetos que serão criados 
// a partir deste model(inicial minúscula, plural do nome, nome do model)
module.exports = mongoose.model('SalaAula', esquema, 'salas_aulas')