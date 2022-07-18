const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api', ProductController.index)
    app.get('/api/products', ProductController.getAll)
    app.get('/api/product/:_id', ProductController.getOne)
    app.post('/api/product', ProductController.newProduct)
    app.put('/api/product/:_id', ProductController.updateProduct)
    app.delete('/api/product/:_id', ProductController.deleteProduct)
}