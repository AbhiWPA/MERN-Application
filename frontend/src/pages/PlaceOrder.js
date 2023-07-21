import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import Header from '../components/Layout/Header'
import Form from '../components/Form/Form'
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteIcon from "@mui/icons-material/Delete";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Table from '../components/Table/Table';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
  return (
    
    <>
      <Header />
      

      <section>
        
        <div>

        <div className='mb-3' style={{display: 'inline-block', marginTop: '15px'}}>
          <h2 className='ml-6 text-3xl text-green-600 font-extrabold font-sans inline-block shadow-black shadow-lg'>Place an Order</h2>
        </div>


{/* ------------------------------------------------------------------------------------- */}
        <div className='columns-2 flex space-x-4 h-64 max-w-7xl left-0 right-0 m-auto'>

          <div className='columns-2xl bg-red-100 shadow-lg shadow-slate-700 rounded-lg'>
            <h3 className='ml-3 text-xl text-red-600 font-sans font-bold'>Select Customer</h3>

            <div className='mt-3'>

            <Form
          textFieldsArray={[
            {
              InputLabel: "Customer ID",
              textFieldType: "select",
              name: "customerId",
              placeHolderText: "Customer ID",
              // value: customerID,
              // onChange: (event: ChangeEvent<HTMLInputElement>) => {
              //   setCustomerID(event.target.value);
              //},
            },
            {
              label: "Name",
              textFieldType: "text",
              name: "name",
              placeHolderText: "name",
              // value: username,
              // onChange: (event: ChangeEvent<HTMLInputElement>) => {
              //   setUsername(event.target.value);
              // },
            },
            
            
            {
              label: "Address",
              textFieldType: "text",
              name: "address",
              placeHolderText: "Address",
              // value: address,
              // onChange: (event: ChangeEvent<HTMLInputElement>) => {
              //   setAddress(event.target.value);
              // },
            },
            {
              label: "Contact Number",
              textFieldType: "text",
              name: "contactNumber",
              placeHolderText: "Contact Number",
              // value: contactNumber,
              // onChange: (event: ChangeEvent<HTMLInputElement>) => {
              //   setContactNumber(event.target.value);
              // },
            },
            {
              label: "Email",
              textFieldType: "text",
              name: "email",
              placeHolderText: "Email",
              // value: email,
              // onChange: (event: ChangeEvent<HTMLInputElement>) => {
              //   setEmail(event.target.value);
              // },
            },

            {
              label: "Email",
              textFieldType: "email",
              name: "email",
              placeHolderText: "Email",
              // value: email,
              // onChange: (event: ChangeEvent<HTMLInputElement>) => {
              //   setEmail(event.target.value);
              // },
            },
          ]}

          buttonsArray={[]}
          />

            </div>
            
          </div>
          <div className='columns-3xl bg-gray-200 shadow-lg shadow-slate-700 rounded-lg'></div>


        </div>

        </div>

      </section>

    </>

  )
}

export default PlaceOrder
