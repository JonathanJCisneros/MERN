const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jobs_db', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .then(() => console.log("Established connection to the database"))
    .catch((err) => console.log("There was an error", err))