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

const getJugadores = async (req, res) => { 
    try {
        const result = await conexion.query('SELECT * FROM jugador');
        const dataresult = result.rows
        await client.end();
        return res.status(200).json(dataresult);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const loginJugador = async (req, res) => { 
    const {email, password} = req.body;
    try {
        const result = await conexion.query('SELECT jugador.id_jugador, jugador.email_jugador, jugador.total_jugador FROM jugador WHERE jugador.email_jugador= $1 AND jugador.clave_jugador = $2 GROUP BY jugador.id_jugador', [email, password]);
        const dataresult = result.rows;
        console.log("Estoy aca");
        console.log(dataresult);
        await client.end();
        res.render("preguntas", { titulo: "Preguntas de Jugador", data:dataresult });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createJugador = async (req, res) => { 
    const {nombre, apellido, email, password} = req.body;
    try {
        const result = await conexion.query('INSERT INTO JUGADOR (nombre, apellido, email, password) values ($1, $2, $3, $4)', [nombre, apellido, email, password]);
        await client.end();
        return res.status(200).send(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { getJugadores, loginJugador, createJugador }


