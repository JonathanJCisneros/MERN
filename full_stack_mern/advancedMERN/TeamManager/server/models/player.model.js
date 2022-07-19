const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Player name is required"],
        minlength : [3, "Player name must be at least 3 characters long"]
    },
    position : {
        type : String,
        required : [true, "Position is required"],
        minlength : [3, "Player position must be at least 3 characters long"]
    },
    status : String
}, {timestamps : true})

module.exports = mongoose.model('Player', PlayerSchema)