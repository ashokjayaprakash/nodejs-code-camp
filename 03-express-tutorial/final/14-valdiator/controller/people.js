let { people } = require('../../../data')
const { validationResult } = require('express-validator');

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data= req.body
  res.status(201).send({ success: true, data })
}

const createPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).send({ success: true, data: [...people, name] })
}

const getPersonById = (req, res) => {

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { id } = req.params
  
  const person = people.find((person) => person.id === Number(id))

  res.status(200).json({ success: true, data: person })
}

const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
}

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
  getPeople,
  createPerson,
  getPersonById,
  createPersonPostman,
  updatePerson,
  deletePerson,
}
