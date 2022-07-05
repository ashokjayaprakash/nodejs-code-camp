const express = require('express')
const router = express.Router()
const { checkSchema } = require('express-validator');
const { createPersonSchema, getPersonSchema } = require('../schema/people')

const {
  getPeople,
  createPerson,
  createPersonPostman,
  getPersonById,
  updatePerson,
  deletePerson,
} = require('../controller/people')

router.route('/')
    .get(getPeople)
    .post(checkSchema(createPersonSchema) , createPerson)

router.route('/postman')
    .post(createPersonPostman)

router.route('/:id')
    .get(checkSchema(getPersonSchema), getPersonById)
    .put(updatePerson)
    .delete(deletePerson)

module.exports = router
