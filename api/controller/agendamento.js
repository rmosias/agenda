
const mc = require('../config/database');
// connect to database
mc.connect();

exports.agendamento_get_all = (req,res,next) => {
    mc.query('SELECT * FROM agendamento', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Agendamento list.' });
    });
}
exports.agedamento_get_id = (req, res, next) => {
    const agendamento_id = req.params.ag_codagendamento;
    mc.query('SELECT * FROM agendamento where ag_codagendamento=?', agendamento_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Todos list.' });
    });
}

exports.agendamento_insert = (req, res, next) => {
    const agenda = req.body;
    if (!agenda) {
        return res.status(400).send({ error: true, message: 'Please provide task' });
    }
    try {
        
    } catch (error) {
        
    }
    mc.query("INSERT INTO agendamento SET ? ", { ag_codagendamento: agenda.ag_codagendamento, 
                                                ag_data: agenda.ag_data, ag_periodo: agenda.ag_periodo, 
                                                ag_nomepaciente: agenda.ag_nomepaciente, ag_rgpaciente: agenda.ag_rgpaciente, 
        ag_cpfpaciente: agenda.ag_cpfpaciente, ag_telefone1: agenda.ag_telefone1, ag_telefone2: agenda.ag_telefone2, ag_email: agenda.ag_email, ag_codcurso: agenda.ag_codcurso  }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
    });
}

exports.agendamento_update = (req, res, next) => {

    let task_id = req.body.task_id;
    let task = req.body.task;

    if (!task_id || !task) {
        return res.status(400).send({ error: task, message: 'Please provide task and task_id' });
    }

    mc.query("UPDATE tasks SET task = ? WHERE id = ?", [task, task_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
    });
};

exports.agendamento_delete = (req, res, next) => {
    let agendamento_id = req.params.ag_codagendamento;

    mc.query('DELETE FROM agendamento WHERE id = ?', [agendamento_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
    });
}


