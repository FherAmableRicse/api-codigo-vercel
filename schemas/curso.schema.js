const Joi = require('joi');

const nombre = Joi.string().min(3).max(100);


const createCursoSchema = Joi.object({
    nombre: nombre.required()
});

const updateCursoSchema = Joi.object({
    nombre: nombre.required()
});

module.exports = {createCursoSchema,updateCursoSchema}