const mongoose = require('mongoose');


const tarefasSchema = new mongoose.Schema({
    id : { type : Number},
    descriacao: { type: Boolean },
    dataInclusao: { type: String },
    conclusao: { type: Boolean },
    nomeColaboradora: { type: String}
},{
    versionKey: false

});

const tarefas = mongoose.model('tarefas', tarefasSchema);



// exportar o model para ser ultilizado 
module.exports = tarefas;