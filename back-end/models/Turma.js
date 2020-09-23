const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    data_inicial: { type: Date, required: true },
    data_final: { type: Date, required: true },
    dias_semana: [{
        type: String,
        required: true,
        enum: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']
    }],
    horario_inicial: { type: String, required: true },
    horario_final: { type: String, required: true },
    curso: { type: mongoose.ObjectId, ref: 'Curso', required: true },
    professor: { type: mongoose.ObjectId, ref: 'Professor', required: true },
    sala_aula: { type: mongoose.ObjectId, ref: 'SalaAula', required: true }
})

// Parâmetros do mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> A constante esquema, montada anteriormente
// 3º -> o nome da coleção no banco de dados que irá receber os objetos que serão criados 
// a partir deste model(inicial minúscula, plural do nome, nome do model)
module.exports = mongoose.model('Turma', esquema, 'turmas')