const express = require("express");
const router = express.Router();

const AgendamentoController = require('../controller/agendamento');

// Handle incoming GET requests to /orders
router.get("/", AgendamentoController.agendamento_get_all);
router.get("/:ag_codagendamento", AgendamentoController.agedamento_get_id);
router.post("/", AgendamentoController.agendamento_insert);
router.put("/:ag_codagendamento",AgendamentoController.agendamento_update);
router.delete("/:ag_codagendamento", AgendamentoController.agendamento_delete);

module.exports = router;
