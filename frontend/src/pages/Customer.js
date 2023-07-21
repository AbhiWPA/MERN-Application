import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Form from '../components/Form/Form'
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteIcon from "@mui/icons-material/Delete";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Table from '../components/Table/Table';
import { Link } from 'react-router-dom';

const Customer = () => {
  const [allCustomersList, setAllCustomersList] = useState([]);

  const handleTableRowClick = (tableRow) => {
    console.log(tableRow);
  }

  // useEffect(() => {
  //   let customerArray = [
  //     [
  //       "C001", "Kamal", "Galle", "077777777"
  //     ],

  //     [
  //       "C001", "Kamal", "Galle", "077777777"
  //     ],
  //   ];

  //   setAllCustomersList(customerArray)
  // });

  const tblHeaders = ["Header 1", "Header 2", "Header 3"];
  const tblData = [
    ["Data 1", "Data 2", "Data 3"],
    ["Data 4", "Data 5", "Data 6"],
    // Add more data rows as needed
  ];
  const tableHeight = "300px"; // Adjust the height as needed

  return (
    <div>
      <Header />

      <section>
        <div style={{display: 'inline-block', marginTop: '15px'}}>
          <h2 className='ml-6 text-3xl text-blue-800 font-bold font-sans inline-block shadow-black shadow-lg'>MANAGE CUSTOMERS</h2>
          <button className='!bg-green-700 shadow-black shadow-lg absolute right-0 m-auto' style={{width:'200px', height:'40px'}}><Link to={'/placeOrder'} className='!text-white text-xl font-bold font-serif'>Place Order</Link></button>
        </div>

        <div className='absolute top-36 left-0 right-0 m-auto ms-auto shadow-lg shadow-black h-72 w-4/5 rounded-lg'>
          <h3 className='text-xl text-red-700 font-serif font-bold text-center mt-3'>Save | Update | Delete Customers</h3>

          <div className='absolute top-0 bottom-0 left-0 right-0 m-auto ms-auto w-11/12 h-2/4 inline-block space-x-6'>
         
          <Form
          textFieldsArray={[
            {
              label: "Customer ID",
              textFieldType: "text",
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
          ]}
          buttonsArray={[
            {
              color: "success",
              icon: <AddCircleIcon />,
              text: "Save",
              // onClick: handleSaveCustomer,
            },
            {
              color: "primary",
              icon: <AutorenewIcon />,
              text: "Update",
              // onClick: handleUpdateCustomer,
            },
            {
              color: "error",
              icon: <DeleteIcon />,
              text: "Delete",
              // onClick: handleDeleteCustomer,
            },
            {
              color: "warning",
              icon: <BackspaceIcon />,
              text: "Clear",
              // onClick: handleClearFields,
            },
          ]}
        />

          </div>        
          {/* <div className=''></div> */}
        </div>

      </section>

      <div className='absolute top-3/4 left-0 right-0 m-auto w-11/12 h-1/3'>
      <Table
          tblName="All Customers"
          tblHeight="auto"
          tblHeaders={[
            "Customer ID",
            "Customer Name",
            "Address",
            "Contact",
            "E-mail"
          ]}
          tblData={allCustomersList.map((customerArray) => customerArray)}
          handleTblRowClick={handleTableRowClick}
        />
      </div>

      
    </div>
  )
}

export default Customer