import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Form from '../components/Form/Form'
import Table from '../components/Table/Table';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import BackspaceIcon from "@mui/icons-material/Backspace";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { Link } from 'react-router-dom';
import { Button, Input} from '@mui/material';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';


const PlaceOrder = () => {

  const [allCustomersList, setAllCustomersList] = useState([]);

  const handleTableRowClick = (tableRow) => {
    console.log(tableRow);
  }

  const tblHeaders = ["Header 1", "Header 2", "Header 3"];
  const tblData = [
    ["Data 1", "Data 2", "Data 3"],
    ["Data 4", "Data 5", "Data 6"],
    // Add more data rows as needed
  ];

const tableHeight = "300px";

  return (
    
    <>
      <Header />
      

      <section>
        
        <div>

        <div className='mb-3' style={{display: 'inline-block', marginTop: '15px'}}>
          <h2 className='ml-6 text-3xl text-green-600 font-extrabold font-sans inline-block shadow-black shadow-lg'>Place an Order</h2>
        </div>


{/* ------------------------------------------------------------------------------------- */}
        <div className='columns-2 flex space-x-4 h-72 max-w-7xl left-0 right-0 m-auto'>

          <div className='columns-2xl bg-red-100 h-72 shadow-lg shadow-slate-700 rounded-lg'>
            <h3 className='ml-3 text-xl text-red-600 font-sans font-bold'>Invoce Details</h3>

            <div className='mt-3'>

            <Form
          textFieldsArray={[
            {
              label: "Order ID",
              textFieldType: "text",
              name: "name",
              placeHolderText: "OrderID",
              // value: username,
              // onChange: (event: ChangeEvent<HTMLInputElement>) => {
              //   setUsername(event.target.value);
              // },
            },

            {
              label: "",
              textFieldType: "Date",
              name: "date",
              placeHolderText: "Date",
              // value: username,
              // onChange: (event: ChangeEvent<HTMLInputElement>) => {
              //   setUsername(event.target.value);
              // },
            },

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

          ]}

          buttonsArray={[    
            {
              color: "success",
              icon: <PersonAddAlt1RoundedIcon />,
              text: "Add New Customer",
              // onClick: handleSaveCustomer,
            },

            {
              color: "error",
              icon: <BackspaceIcon />,
              text: "Clear",
              // onClick: handleDeleteCustomer,
            },

          ]}
          />

            </div>
            
          </div>

      <div className='columns-3xl bg-gray-200 shadow-lg shadow-slate-700 rounded-lg'>
        <h3 className='ml-3 text-xl text-violet-800 font-sans font-bold'>Select Item</h3>

        <div className='mt-3'>

        <Form
      textFieldsArray={[
        {
          label: "Item Code",
          textFieldType: "select",
          name: "itemCode",
          placeHolderText: "Item Code",
          // value: customerID,
          // onChange: (event: ChangeEvent<HTMLInputElement>) => {
          //   setCustomerID(event.target.value);
          //},
       },
        {
          label: "Description",
          textFieldType: "text",
          name: "description",
          placeHolderText: "description",
          // value: username,
          // onChange: (event: ChangeEvent<HTMLInputElement>) => {
          //   setUsername(event.target.value);
          // },
       },
  
  
        {
          label: "Unit Price",
          textFieldType: "text",
          name: "unitPrice",
          placeHolderText: "unitPrice",
          // value: address,
         // onChange: (event: ChangeEvent<HTMLInputElement>) => {
         //   setAddress(event.target.value);
          // },
        },
        {
          label: "QTY On Hand",
          textFieldType: "text",
          name: "qtyOnHand",
          placeHolderText: "QTY On Hand",
          readOnly : true,
          // value: contactNumber,
          // onChange: (event: ChangeEvent<HTMLInputElement>) => {
          //   setContactNumber(event.target.value);
          // },
        },
        {
          label: "Qty For Order",
          textFieldType: "Number",
          name: "qtyForOrder",
          placeHolderText: "Qty For Order",
          // value: email,
          // onChange: (event: ChangeEvent<HTMLInputElement>) => {
          //   setEmail(event.target.value);
         // },
        },
      ]}

      buttonsArray={[
        {
          color: "success",
          icon: <AddShoppingCartRoundedIcon />,
          text: "Add to Cart",
          // onClick: handleSaveCustomer,
        },

        {
          color: "error",
          icon: <BackspaceIcon />,
          text: "Clear",
          // onClick: handleDeleteCustomer,
        },

      ]}
      />

        </div>
  
</div>


        </div>

        <div className='absolute left-0 right-0 bottom-20 m-auto h-24 w-3/4 bg-yellow-200 shadow-lg rounded-lg shadow-black flex space-x-20 items-center justify-start'>
          <div>
          <label className='text-2xl font-serif font-bold text-red-700 ml-3'>Total (Rs.) : </label>
          <label className='text-xl font-serif font-bold text-red-700 ml-3'>0.00</label>
          </div>

          <div>
          <label className='text-xl font-serif font-bold ml-3'>Discount (%): </label>
          <Input className='text-lg font-serif font-bold text-red-700 ml-3' defaultValue={'%'} type='Number'></Input>
          </div>

          <div>
          <label className='text-2xl font-serif font-bold text-red-700 ml-3'>Sub Total (Rs.) : </label>
          <label className='text-xl font-serif font-bold text-red-700 ml-7'>0.00</label>
          </div>
        </div>

        <div className='relative top-28 left-0 right-0 m-auto w-11/12 h-1/3 block'>
      <Table
          tblName="Cart"
          tblHeight="auto"
          tblHeaders={[
            "Item Code",
            "Description",
            "Unit Price",
            "Qty",
            "Total",
            "---"
          ]}
          tblData={allCustomersList.map((customerArray) => customerArray)}
          handleTblRowClick={handleTableRowClick}
        />

      
      </div>   
      
    </div>
    <div className='absolute w-48 h-24 mt-32 mb-12 right-14 pb-16 text-xl'>

          <button className='absolute top-2/4 bottom-0 left-9 right-0 m-auto text-lg bg-green-600 text-white font-sans font-bold rounded-lg shadow-black shadow-xl'>
            PLACE ORDER
          </button>

    </div>
    </section>

     

    </>

  )
}

export default PlaceOrder
