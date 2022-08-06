const Joi = require('joi');

const nombre = Joi.string().min(3).max(100);
const email = Joi.string().email();

const createAlumnoSchema = Joi.object({
    nombre: nombre.required(),
    email: email.required()
});

const updateAlumnoSchema = Joi.object({
    nombre: nombre.required(),
    email: email.required()
});

module.exports = {createAlumnoSchema,updateAlumnoSchema}