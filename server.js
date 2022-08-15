// Importa as dependencias que acabamos de intalar
const express = require("express");
const path = require("path");

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo no build)
app.use(express.static(__dirname + "/dist/forum"));

// fazendo um teste aqui
isProduction && app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "dist/forum/index.html"));
});

//Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);
