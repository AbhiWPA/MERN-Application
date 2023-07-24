const { log } = require('console');
const Customer = require('../models/Customer');

class CustomerController {

    //get all customers
    getAllCustomers = async(req, res) => {
        // try{
        //     // let allCustomers = await Customer.find();
        //     let allCustomers = [{id:"C001", name:"Kamal"}, {id:"C002", name:"Nimal"}];
        //     return res.status(200).json({message: "Load All Customers", response: allCustomers});

        // }catch(error){
        //     if(error instanceof Error){
        //         return res.status(500).json({message: error.message});
        //     }else{
        //         return res.status(500).json({message: "Unknown Error Occured..!"});
        //     }
        }

    //save customers
    saveCustomer = async(req, res) => {
        console.log("Save Customer Req : ", req.body);
        const data = await Customer.create(req.body);
        res.send("Customer Saved Successfully...!");
    }

    //update customer
    updateCustomer = async(req, res) => {
        const cID = req.params.customerID; // Access cID from URL parameters, not query parameters
        console.log('req customer ID : ', cID);

        Customer.findOneAndUpdate({ cId: cID })
            .then(() => {
                return res.status(200).json({
                    success: "update successfully"
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    error: "An error occurred while updating the customer"
                });
            });
    }

    // //update customers
    // updateCustomer = async(req, res) => {
    //     console.log("upadete customer req :", req.body);
        
    // }
    }


module.exports = CustomerController;