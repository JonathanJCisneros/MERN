const { Product } = require("../models/product.model");


module.exports = {
    index : (req, res) => res.json({message : "This is working"}),

    getAll : (req, res) => {
        Product.find()
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },

    getOne : (req, res) => {
        Product.findOne(req.params)
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },

    newProduct : (req, res) => {
        const {title, price, description} = req.body;
        Product.create({title, price, description})
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },

    updateProduct : (req, res) => {
        Product.findOneAndUpdate(req.params, req.body, {new : true})
            .then(update => res.json(update))
            .catch(err => res.json(err))
    },

    deleteProduct : (req, res) => {
        Product.deleteOne(req.params)
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json(err))
    }
}