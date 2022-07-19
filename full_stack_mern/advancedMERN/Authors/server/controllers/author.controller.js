const Author = require('../models/author.model')


module.exports = {
    index : (req, res) => res.json({message: "This is working"}),

    getAll : (req, res) => {
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.json(err))
    },

    getOne : (req, res) => {
        Author.findOne(req.params)
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },

    newAuthor : (req, res) => {
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    updateAuthor : (req, res) => {
        Author.findOneAndUpdate(req.params, req.body, {new : true})
            .then(update => res.json(update))
            .catch(err => res.json(err))
    },

    deleteAuthor : (req, res) => {
        Author.deleteOne(req.params)
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err=> res.json(err))
    }
}