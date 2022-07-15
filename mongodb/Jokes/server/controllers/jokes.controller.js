const Joke = require('../models/jokes.model')

module.exports = {
    allJokes : (req, res) =>{
        Joke.find()
            .then(jokes => res.json(jokes))
            .catch(err => res.json(err))
    },

    oneJoke : (req, res) => {
        Joke.findOne(req.params)
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    },

    createJoke : (req, res) => {
        Joke.create(req.body)
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    },

    updateJoke : (req, res) => {
        Joke.updateOne(req.params, req.body, {new : true, runValidators : true})
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    },

    deleteJoke : (req, res) => {
        Joke.deleteOne(req.params)
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    }
}