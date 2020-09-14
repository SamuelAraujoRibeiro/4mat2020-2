const controller = require('../controllers/curso')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo) // Create
router.get('/', controller.listar) // Retrieve

module.exports = router