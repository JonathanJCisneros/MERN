const JokesController = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.get("/db/jokes", JokesController.allJokes)
    app.get("/db/jokes/:_id", JokesController.oneJoke)
    app.post("/db/jokes", JokesController.createJoke)
    app.put("/db/jokes/:_id", JokesController.updateJoke)
    app.delete("/db/jokes/:_id", JokesController.deleteJoke)
}