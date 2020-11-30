const express = require("express");
const routes = express.Router();
const StarController = require("./app/controller/StarController");


routes.get("/", StarController.index);
routes.post("/star", StarController.store);
routes.put("/star/:id", StarController.update)
routes.get("/star/planet/:id", StarController.search)
routes.delete("/star/planet/:planetId", StarController.delete);
routes.delete("/star/planets", StarController.drop);
routes.get("/update", StarController.atualizar);

module.exports = routes;