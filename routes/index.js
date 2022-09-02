const express = require('express');
const router = express.Router();
const { getJugadores, loginJugador, createJugador } = require('../src/controller/jugador');
const { getPreguntas } = require('../src/controller/pregunta');

router.get('/', function(req, res) {
  res.render('index', { title: 'Juego de preguntas' });
});

router.get('/formulario', function (req, res) {
  res.render("formulario", { titulo: "Registro de Jugador" });
});

router.get('/combopreguntas', function (req, res) {
  res.render("preguntas", { titulo: "Preguntas de Jugador" });
});

router.get('/jugador', getJugadores);
router.post('/login', loginJugador);
router.get('/crearjugador', createJugador);
router.get('/preguntas', getPreguntas);



module.exports = router;
