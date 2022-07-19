const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api', AuthorController.index)
    app.get('/api/authors', AuthorController.getAll)
    app.get('/api/author/:_id', AuthorController.getOne)
    app.post('/api/author', AuthorController.newAuthor)
    app.put('/api/author/:_id', AuthorController.updateAuthor)
    app.delete('/api/author/:_id', AuthorController.deleteAuthor)
}