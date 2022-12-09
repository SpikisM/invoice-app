import React from "react";
import Select from "react-select"
import { Link, useNavigate, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import invoiceService from "../services/invoice.service";
import customerService from "../services/customer.service";
import CustomersList from "./CustomersList";
import "bootstrap/dist/css/bootstrap.min.css";
import itemService from "../services/item.service";

const AddInvoice = () => {
<<<<<<< HEAD
  const {invoiceNumber} = useParams();
=======
    const [invoiceNumber, setInvoiceNumber] = useState('');
>>>>>>> 735dc937a1b4a4ee77eb9f188d4fb0e79ee1a21e
    const [myDate, setDate] = useState('');
    const [customer, setCustomer] = useState([]);
    const [invoiceItems, setInvoiceItems] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    const[customerId, setCustomers] = useState([]);

const init = () => {
    customerService
        .getAll()
        .then((response) => {
            console.log("Printing Customer data", response.data);
            setCustomer(response.data);
        })
        .catch((error) => {
            console.log("Ups", error);
        });

      
    itemService
        .getAll()
        .then((response) => {
            console.log("Printing Items data", response.data);
            setInvoiceItems(response.data);
        })
        .catch((error) => {
            console.log("Ups", error);
        });  
  };
   
const saveInvoice = (e) => {
        e.preventDefault();
        
        const invoice = {invoiceNumber, myDate, customerId, invoiceItems};
        if (id) {
            // update record
            invoiceService.update(invoice)
                .then(response => {
                    console.log('Invoice data updated successfully', response.data);
                    navigate('/items'); 
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
        } else {
            // create new record
            invoiceService.create(invoice)
            .then(response => {
                console.log('Invoice added successfully',  response.data);
                navigate('/invoices');
            })
            .catch(error => {
                console.log('Something went wrong555', error);
            })
        }
    }

  
    useEffect(() => {
        
        init();
       
        if (id) {
          invoiceService.get(id)
            .then(invoice => {
<<<<<<< HEAD
             // setInvoiceNumber(invoice.data.invoiceNumber);
=======
                setInvoiceNumber(invoice.data.invoiceNumber);
>>>>>>> 735dc937a1b4a4ee77eb9f188d4fb0e79ee1a21e
                setDate(invoice.data.myDate);
                setCustomers(invoice.data.customerId);
                setInvoiceItems(invoice.data.invoiceItems);     
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
        }
    },[])

    console.log(customerId)
   
    return(
        <div className="container">
            <h3>Pridėti saskaita</h3>
            <hr/>
            <form>
                <div className="form-group">
                    {/* <p>{invoiceNumber}</p> */}
                </div>
                
                <div className="form-group">
                    <input
                       type="date"
                       className="form-control col-4"
                       id="date"
                       value={myDate}
                       onChange={(e) => setDate(e.target.value)}
                       placeholder="Įveskite data"
                    /> 
                </div>
                
                <div className="form-group">
                    <Select                   
                        options={customer}
<<<<<<< HEAD
                        getOptionLabel = {a => a.vardas}
=======
                        getOptionLabel = {a => a.vardas + " " + a.pavarde}
>>>>>>> 735dc937a1b4a4ee77eb9f188d4fb0e79ee1a21e
                        getOptionValue={a => a}  
                        className=" col-4"
                        id="customer"
                        onChange={(e) => setCustomers(e)} 
                        > 
                    </Select>
                </div>
<<<<<<< HEAD
=======
                <div className="form-group">
                    <input
                       type="text"
                       className="form-control col-4"
                       id="Invoice number"
                       value={invoiceNumber}
                       onChange={(e) => setInvoiceNumber(e.target.value)}
                       placeholder="Įveskite sąskaitos numberį"
                    /> 

                </div>
                
>>>>>>> 735dc937a1b4a4ee77eb9f188d4fb0e79ee1a21e
                {/* <Select 
                   // type="text"
                    className="col-4"
                    id="invoiceItems"
                    //value={invoiceItems}
                    options={invoiceItems}
                    getOptionLabel = {a => a.pavadinimas}
                    getOptionValue={a => a}
                    onChange={(e) => setInvoiceItems(e)}
                    >
                </Select> */}
                
                <br />
                <div>
                    <button onClick={(e) => saveInvoice(e)}
                    className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/items">Atgal į sąrašą</Link>
        </div>
    )
};
//fdsfds
export default AddInvoice;
