const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Player name is required"],
        minlength : [2, "Player name must be at least 2 characters long"]
    },
    position : {
        type : String,
        required : [true, "Position is required"],
        minlength : [2, "Player position must be at least 2 characters long"]
    },
    status : String
}, {timestamps : true})

module.exports = mongoose.model('Player', PlayerSchema)