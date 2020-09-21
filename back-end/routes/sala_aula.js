const controller = require('../controllers/sala_aula')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo) // Create
router.get('/', controller.listar) // Retrieve(all)
router.get('/:id', controller.obterUm) // Retrive(one)
router.put('/', controller.atualizar) // Update
router.delete('/', controller.excluir) // Delete

module.exports = router