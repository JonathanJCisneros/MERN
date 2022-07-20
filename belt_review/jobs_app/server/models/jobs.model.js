const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
title : {
    type : String,
    required : [true, "Job Title is required"],
    minlength : [3, "Title must be at least 3 characters long"]
},
company : {
    type : String,
    required : [true, "Company name is required"],
    minlength : [3, "Company must be at least 3 characters long"]
},
salary : {
    type : Number,
    min : [70000, "Salary must be at least $70,000"],
},
isRemote : Boolean
}, {timestamps : true})

module.exports = mongoose.model('Job', JobSchema)