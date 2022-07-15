const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup : String,
    punchline : String
}, {timestamp : true})

module.exports = mongoose.model('Joke', JokeSchema)