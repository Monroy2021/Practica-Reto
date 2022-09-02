const express = require('express');
const { Pool } = require('pg');
const config = require('../config/configdb');
const conexion = new Pool(config.db);

conexion.connect((err, client, release) => {
    if (err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log("Conectado a la Base de Datos !")
    })
});

const getPreguntas = async (req, res) => { 
    try {
        const result = await conexion.query('SELECT pregunta.id_pregunta, pregunta.descripcion_pregunta, categoria.nombre_categoria FROM pregunta, categoria WHERE pregunta.id_categoria = categoria.id_categoria');
        const dataresult = result.rows
        return res.status(200).json(dataresult);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getPreguntas }