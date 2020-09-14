// Importar o model para dentro do controller

const Curso = require('../models/Curso')

const controller = {} // Objeto vazio

// Método novo(), implementando a operação CREATE
controller.novo = async (req, res) => {
    try {
        // Envia os dados dentro do req.body para o banco de dados para criação
        await Curso.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro) {
        console.error(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Método listar(), implementando a operação RETRIEVE(all)
controller.listar = async (req, res) => {
    try {
        // find() sem parâmetros é para trazer tudo
        let dados = await Curso.find()
        res.send(dados) // Vai com status HTTP 200: OK
    }
    catch(erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}

// Método obterUm(), implementando a operação RETRIEVE(one)
controller.obterUm = async (req, res) => {
    const id = req.params.id // Capturando o parâmetro id
    let obj = await Curso.findById(id)

    // Se o objeto vier preenchido (achou), então o retornamos
    if(obj) res.send(obj)
    // Senão (objeto vazio), enviamos o status HTTP 404: Not Found
    else res.status(404).end()
}

module.exports = controller