// const UserController = require('../controllers/user2.controller') 
const UserController = require('../controllers/user.controller')
module.exports = (app) => {

    // READ --- GET ALL
    app.get("/api/users", UserController.allUsers)
    

    // READ ONE --- GET ONE ITEM
    app.get("/api/users/:id", UserController.oneUser)


    // CREATE --- POST
    app.post("/api/users", UserController.addUser)


    // UPDATE --- PUT (read one + create)
    app.put("/api/users/:id", UserController.updateUser)


    // DELETE
    app.delete("/api/users/:id", UserController.deleteUser)
}


