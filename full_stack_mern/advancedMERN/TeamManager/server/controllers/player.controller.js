const Player = require('../models/player.model')


module.exports = {
    getAll : (req, res) => {
        Player.find()
            .then(players => res.json(players))
            .catch(err => res.json(err))
    },

    getOne : (req, res) => {
        Player.findOne(req.params)
            .then(player => res.json(player))
            .catch(err => res.json(err))
    },

    newPlayer : (req, res) => {
        Player.create(req.body)
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err))
    },

    updatePlayer : (req, res) => {
        Player.findOneandUpdate(req.params, req.body, {new : true, runValidators : true})
            .then(update => res.json(update))
            .catch(err => res.status(400).json(err))
    },

    deletePlayer : (req, res) => {
        Player.deleteOne(req.params)
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json(err))
    }
}