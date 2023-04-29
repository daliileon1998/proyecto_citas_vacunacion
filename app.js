const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UsuariosRouter = require('./routers/usuariosRouter');
const app= express();

app.use(cors());
app.use(bodyParser.json());

//Usuarios
app.use("/usuarios", UsuariosRouter);

//Vacunas

//Citas

const PORT = process.env.PORT || 5000;
app.listen(PORT);