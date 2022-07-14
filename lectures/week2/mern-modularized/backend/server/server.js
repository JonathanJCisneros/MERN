const express = require("express")
const app = express()
const port = 8000

// allows POST
app.use( express.json() );
// recognize JSON object

app.use( express.urlencoded({ extended: true }) );
// to receive arrays or object

const Routes = require('./routes/user.routes')
Routes(app)


app.listen(port, ()=> console.log(`Listening to port: ${port}`))