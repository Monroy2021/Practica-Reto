const dotenv = require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log("Esta corriendo el servidor en el puerto: ",port));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use("/", require("./routes/index"));
