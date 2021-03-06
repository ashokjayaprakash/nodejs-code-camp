const express = require('express')
const { people } = require('../../../data')
const router = express.Router()

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controller/people')

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.put('/:id/revew', updatePerson)

// router.delete('/:id', deletePerson)

router.route('/')
    .get(getPeople)
    .post(createPerson)

router.route('/postman')
    .post(createPersonPostman)

router.route('/:id')
    .put(updatePerson)
    .delete(deletePerson)

module.exports = router
