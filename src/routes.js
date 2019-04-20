const express = require("express");
const multer = require("multer");
const confiMulter = require("./config/multer");

const routes = express.Router();

const BoxControl = require("./controller/BoxControl");
const FileControl = require("./controller/FileControl");
/*
routes.get("/teste", function(req, res){
return res.send("salve mundao");
});
*/

routes.post('/Boxes', BoxControl.store);
routes.get("/boxes/:id", BoxControl.show);

routes.post("/boxes/:id/files", multer(confiMulter).single('file'), FileControl.store);

// exporta as informaçoes da variavel routes, para fora do arquivo
module.exports = routes;

//get = buscar alguma informaçao
//post = criar alguma coisa
//put = modificar
//delete;
