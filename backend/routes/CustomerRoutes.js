// const router = require('express').Router();
// const { log } = require('console');
// let Customer = require('../models/Customer');

const CustomerController = require("../controller/CustomerController");

// //   http://localhost:4000/customer/add
// router.route("/add").post((req,res)=>{
//     const cId = req.body.cId;
//     const name = req.body.name;
//     const address = req.body.address;
//     const contact = req.body.contact;

//     const newCustomer = new Customer({
//         cId,
//         name,
//         address,
//         contact
//     });

//     newCustomer.save().then(()=>{
//         res.json("Customer Saved...!");
//     }).catch((err)=>{
//         console.log(err);
//     })
// });

// ----------------------------------------------------------------------
const express = require("express");

class CustomerRoutes{
    #router = express.Router();
    #customerController = new CustomerController();

    constructor(){
        this.#configRoutes();
    };

    #configRoutes = () => {
        this.#router.get("/", this.#customerController.getAllCustomers);
    };

    getRouter = () => {
        return this.#router;
    };
}

module.exports = CustomerRoutes;