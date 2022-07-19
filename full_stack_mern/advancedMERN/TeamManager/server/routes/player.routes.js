const PlayerController = require('../controllers/player.controller')

module.exports = (app) => {
    app.get('/api/players', PlayerController.getAll)
    app.get('/api/player/:_id', PlayerController.getOne)
    app.post('/api/player', PlayerController.newPlayer)
    app.put('/api/player/:_id', PlayerController.updatePlayer)
    app.delete('/api/player/:_id', PlayerController.deletePlayer)
}