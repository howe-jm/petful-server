const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res, next) => {
  let pets = Pets.get();
  return res.json(pets).status(200);
});

router.delete('/', json, (req, res) => {
  const { type } = req.body;
  let pet = Pets.dequeue(type);
  let person = People.dequeue();
  let response = { pet, person };
  return res.json(response).status(200);
});

module.exports = router;
