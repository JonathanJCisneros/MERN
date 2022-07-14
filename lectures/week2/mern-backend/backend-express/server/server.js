const express = require("express")
const app = express()
const port = 8000

// temporary database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// FULL CRUD:

app.use( express.json() );
// recognize JSON object

app.use( express.urlencoded({ extended: true }) );
// to receive arrays or object



// CREATE --- POST
app.post("/api/users", (req,res) => {
    users.push(req.body)
    res.json(req.body)
})


// READ --- GET
// app.get --> takes 2 arguements: (path, function(request, response))
app.get("/api/users", (req, res)=> {
    // request: what is received from this call
    // response: what should be sent out
    res.json(users)
})

// READ ONE --- GET ONE ITEM
app.get("/api/users/:id", (req, res) => {
    const idFromParams = req.params.id
    res.json(users[idFromParams])
})


// UPDATE --- PUT (read one + create)
// get the specific user with params and update the info with the req.body
app.put("/api/users/:id", (req, res) => {
    const idFromParams = req.params.id
    users[idFromParams] = req.body
    res.json(users[idFromParams])
})


// DELETE
app.delete("/api/users/:id", (req,res) => {
    const idFromParams = req.params.id
    users.splice(idFromParams, 1)
    res.json(users)
})


app.listen(port, ()=> console.log(`Listening to port: ${port}`))
