const {Person} = require('../models/person.model');


module.exports = {
    index : (req, res) => res.json({message : "Hello World"}),
    
    createPerson : (req, res) => {
        const {firstName, lastName} = req.body;
        Person.create({firstName, lastName})
            .then(person => res.json(person))
            .catch(err => res.json(err))
    },

    getAllPeople : (req, res) => {
        Person.find()
            .then(people => res.json(people))
            .catch(err => res.json(err))
    },

    getPerson : (req, res) => {
        Person.findOne(req.params)
            .then(person => res.json(person))
            .catch(err => res.json(err))
    }
}