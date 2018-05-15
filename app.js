
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const agendamentoRouter = require("./api/router/agendamento");

app.use("/agendamento", agendamentoRouter);

app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});

