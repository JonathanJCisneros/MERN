const PersonController = require('../controllers/person.controller')

module.exports = (app) => {
    app.get('/api', PersonController.index)
    app.post('/api/people', PersonController.createPerson)
    app.get('/api/people', PersonController.getAllPeople)
    app.get('/api/person/:_id', PersonController.getPerson)
    app.put('/api/person/:_id', PersonController.updatePerson)
    app.delete('/api/person/:_id', PersonController.deletePerson)
}