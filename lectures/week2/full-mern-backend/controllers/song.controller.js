const Song = require('../models/song.model')

module.exports= {

    testApi : (req, res) => {
    res.json({Status: "ok"})
    },

    allSongs : (req, res) => {
    Song.find()
        .then(songs => res.json(songs))
        .catch(err => res.json(err))
    },

    oneSong : (req, res) => {
    Song.findOne({_id : req.params.id})
        .then(oneSong => res.json(oneSong))
        .catch(err => res.json(err))
    },

    createSong : (req, res) => {
    Song.create(req.body)
        .then(song => res.json(song))
        .catch(err => res.json(err))
    },

    updateSong : (req, res) => {
    Song.updateSong({_id : req.params.id}, req.body, {new : true, runValidators : true})
        .then(updatedSong => res.json(updatedSong))
        .catch(err => res.json(err))
    },

    deleteSong : (req, res) => {
    Song.deleteOne({_id : req.params.id})
        .then(message => res.json(message))
        .catch(err => res.json(err))
    }
}
