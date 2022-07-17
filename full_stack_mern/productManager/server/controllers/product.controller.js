const { Product } = require("../models/product.model");


module.exports = {
    index : (req, res) => res.json({message : "This is working"}),

    getAll : (req, res) => {
        Product.find()
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },

    newProduct : (req, res) => {
        const {title, price, description} = req.body;
        Product.create({title, price, description})
            .then(product => res.json(product))
            .catch(err => res.json(err))
    }
}