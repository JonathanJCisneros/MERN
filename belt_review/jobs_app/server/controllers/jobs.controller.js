const Job = require('../models/jobs.model')

module.exports = {
    getAll : (req, res) => {
        Job.find()
            .then(players => res.json(players))
            .catch(err => res.json(err))
    },

    getOne : (req, res) => {
        Job.findOne(req.params)
            .then(player => res.json(player))
            .catch(err => res.json(err))
    },

    newJob : (req, res) => {
        Job.create(req.body)
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err))
    },

    updateJob : (req, res) => {
        Job.findOneAndUpdate(req.params, req.body, {new : true})
            .then(update => res.json(update))
            .catch(err => res.json(err))
    },

    deleteJob : (req, res) => {
        Job.deleteOne(req.params)
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json(err))
    }
}