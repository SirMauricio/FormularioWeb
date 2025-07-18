const express = require('express');
const router = express.Router();
const formularioController = require('../controllers/formularioControllers'); // 🔧 corregido (minúscula)

// Ruta para crear nuevo formulario
router.post('/', formularioController.crearFormulario);

// Ruta para obtener todos los formularios
router.get('/obtenerFormularios', formularioController.obtenerFormularios);

module.exports = router;
