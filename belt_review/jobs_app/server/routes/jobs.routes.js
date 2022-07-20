const JobController = require('../controllers/jobs.controller')

module.exports = (app) => {
    app.get('/api/jobs', JobController.getAll)
    app.get('/api/job/:_id', JobController.getOne)
    app.post('/api/job', JobController.newJob)
    app.put('/api/job/:_id', JobController.updateJob)
    app.delete('/api/job/:_id', JobController.deleteJob)
}