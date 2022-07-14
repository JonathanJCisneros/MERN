const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

class User {
    constructor () {
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.number();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this._id = faker.datatype.uuid();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.number(),
        this.name = faker.company.companyName(),
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        } 
    }
};


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    res.json(new User())
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Company())
})

app.get("/api/user/company", (req, res) => {
    const user = new User()
    const company = new Company()
    res.json({user, company})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );
