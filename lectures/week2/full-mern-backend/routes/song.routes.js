const SongController = require('../controllers/song.controller')

module.exports = (app) => {
    app.get("/api/test", SongController.testApi)
    app.get("/api/songs", SongController.allSongs)
    app.get("/api/songs/:_id", SongController.oneSong)
    app.post("/api/songs", SongController.createSong)
    app.put("/api/songs/:_id", SongController.updateSong)
    app.delete("/api/songs/:_id", SongController.deleteSong)
}