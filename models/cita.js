const mongoose = require('mongoose');

const citaSquema = mongoose.Schema(
    {
        fecha_cita:{
            type:'Date',
            required:true
        },
        id_usuario:{
            type:'number',
            required:true
        },
        id_vacunador:{
            type:'number',
            required:true
        },
        id_vacuna:{
            type:'number',
            required:true
        },
        estado:{
            type:'string',
            required:true
        }
    },{
        collection: "Citas",
        versionKey: false
    }
);

module.exports = mongoose.model('Citas',citaSquema);