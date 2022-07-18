const Song = require('../models/song.model')

module.exports = {

    testApi : (req, res) => {
        res.json({status: "ok"})
    },

    allSongs : (req, res) => {
        Song.find()
            .then(songs => res.json(songs))
            .catch(err => res.json(err))
    },

    oneSong : (req, res) => {
        Song.findOne(req.params)
            .then(oneSong => res.json(oneSong))
            .catch(err => res.json(err))
    },

    createSong : (req, res) => {
        Song.create(req.body)
            .then(song => res.json(song))
            .catch(err => res.json(err))
    },

    updateSong : (req, res) => {
        Song.updateOne(req.params, req.body, {new : true, runValidators : true})
            .then(updatedSong => res.json(updatedSong))
            .catch(err => res.json(err))
    },

    deleteSong : (req, res) => {
        Song.deleteOne(req.params)
            .then(message => res.json(message))
            .catch(err => res.json(err))
    }
}
