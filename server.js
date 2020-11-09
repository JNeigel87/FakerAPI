const express = require("express");
const app = express();
const port = 8000;
var faker = require("faker");

class User{
    constructor(){
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.phoneNumber = faker.phone.phoneNumber(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password()
    }

}

class Company{
    constructor(){
        this.name = faker.company.companyName(),
        this.street = faker.address.streetName()
        this.city = faker.address.city(),
        this.state = faker.address.state(),
        this.zipCode = faker.address.zipCode(),
        this.country = faker.address.country()
    }
}

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.get("/api", (req,res) => {
    res.json({message: "it actually worked!!"})
});

app.get("/api/users/new", (req,res) => {
    const newUsers = new User();
    res.json({user: newUsers});
});

app.get("/api/companies/new", (req,res) => {
    const newComp = new Company();
    res.json({company: newComp});
});

app.get("/api/user/company", (req,res) => {
    const newYou = new User();
    const newUs = new Company();
    res.json({user: newYou, company: newUs});
});




app.listen(port, () => console.log(`running on ${port}!!!`));