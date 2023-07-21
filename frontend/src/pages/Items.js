import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import { TextField } from '@mui/material'
import Form from '../components/Form/Form'
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteIcon from "@mui/icons-material/Delete";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Table from '../components/Table/Table';
import { Link } from 'react-router-dom';

const Items = () => {
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
        <div style={{display: 'inline-block', marginTop: '10px'}}>
          <h2 className='ml-6 text-3xl text-red-700 font-bold font-sans inline-block shadow-black shadow-lg'>MANAGE ITEMS</h2>
          <button className='!bg-green-700 shadow-black shadow-lg absolute right-0 m-auto' style={{width:'200px', height:'40px'}}><Link to={'/placeOrder'} className='!text-white text-xl font-bold font-serif'>Place Order</Link></button>
        </div>

        <div className='absolute top-40 left-0 right-0 m-auto ms-auto shadow-lg shadow-black h-56 w-4/5 rounded-lg'>
          <h3 className='text-xl text-blue-800 font-serif font-bold text-center mt-3'>Save | Update | Delete Item</h3>

          <div className='absolute top-0 bottom-0 left-0 right-0 m-auto ms-auto w-11/12 h-2/4 inline-block space-x-6'>
          {/* <TextField id="outlined-text-input" label="Item Id" type="text" />
          <TextField id="outlined-text-input" label="Description" type="text" className='text-white' style={{width:'400px'}}/>
          <TextField id="outlined-text-input" label="Unit Price" placeholder='Rs.0.00' type="" className='text-white'/>
          <TextField id="outlined-text-input" label="Item Name" type="text" className='text-white'/>
          <TextField id="outlined-text-input" label="Item Name" type="text" className='text-white'/> */}

        <Form
          textFieldsArray={[
            {
              label: "Item Code",
              textFieldType: "text",
              name: "itemCode",
              placeHolderText: "Item Code",
              // value: customerID,
              // onChange: (event) => {
              //   setCustomerID(event.target.value);
              // },
            },
            {
              label: "Description",
              textFieldType: "text",
              name: "description",
              placeHolderText: "Description",
              // value: username,
              // onChange: (event) => {
              //   setUsername(event.target.value);
              // },
            },
            {
              label: "Unit Price",
              textFieldType: "text",
              name: "unitPrice",
              placeHolderText: "Rs. 0.00",
              // value: password,
              // onChange: (event: ChangeEvent<HTMLInputElement>) => {
              //   setPassword(event.target.value);
              // },
            },
            {
              label: "Quantity",
              textFieldType: "Number",
              name: "qty",
              placeHolderText: "Quantity",
              // value: customerName,
              // onChange: (event: ChangeEvent<HTMLInputElement>) => {
              //   setCustomerName(event.target.value);
              // },
            }
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

      <div className='absolute top-2/3 left-0 right-0 m-auto w-11/12 h-1/3'>
      <Table
          tblName="All Item Details"
          tblHeight="auto"
          tblHeaders={[
            "Item Code",
            "Description",
            "Unit Price",
            "Quantity",
          ]}
          tblData={allCustomersList.map((customerArray) => customerArray)}
          handleTblRowClick={handleTableRowClick}
        />
      </div>

      
    </div>
  )
}

export default Items