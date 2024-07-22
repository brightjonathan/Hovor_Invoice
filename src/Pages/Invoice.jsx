import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactToPrint from "react-to-print";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import InvoiceHeader from '../Components/InvoiceHeader';
import MainDetails from '../Components/MainDetails';
import ClientDetails from '../Components/ClientDetails';
import Date from '../Components/Date';
import Table from '../Components/Table';
import Notes from '../Components/Notes';
import Footer from '../Components/Footer';
import { auth, db } from '../Firebase/Firebase_config';
import { v4 as uuidv4 } from "uuid";
import { toast } from 'react-toastify';
import LoadSpinner from '../Utility/LoadSpinner';

const initialState = {
  userName: "",
  address: "",
  email: "",
  phone: "",
  bankName: "",
  bankAccount: "",
  website: "",
  clientName: "",
  clientAddress: "",
  invoiceNumber: "",
  invoiceDate: "",
  dueDate: "",
  notes: "",
  description: "",
  quantity: "",
  price: "",
  amount: "",
  total: 0,
  list: []
};

const InputField = ({ label, name, type, value, onChange, maxLength, placeholder }) => (
  <div className="flex flex-col">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      placeholder={placeholder}
      autoComplete="off"
    />
  </div>
);

const Invoice = ({ isAuth }) => {
  const navigate = useNavigate();
  const componentRef = useRef();
  const [formValue, setFormValue] = useState(initialState);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const {
    address,
    bankAccount,
    bankName,
    clientAddress,
    clientName,
    description,
    dueDate,
    email,
    invoiceDate,
    invoiceNumber,
    notes,
    phone,
    price,
    quantity,
    userName,
    website
  } = formValue;

  const onInputChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    const newItem = {
      id: uuidv4(),
      description,
      quantity: Number(quantity),
      price: Number(price),
      amount: Number(quantity) * Number(price)
    };
    setList([...list, newItem]);
    setFormValue({ ...formValue, description: '', quantity: '', price: '' });
  };

  const handleDeleteItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin');
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    const newTotal = list.reduce((acc, item) => acc + item.amount, 0);
    setTotal(newTotal);
  }, [list]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      address === "" ||
      clientAddress === "" ||
      clientName === "" ||
      dueDate === "" ||
      email === "" ||
      invoiceDate === "" ||
      invoiceNumber === "" ||
      phone === "" ||
      userName === "" 
    ) {
      toast.error('Please fill all input field');
    }else{

      
      // Prepare the data to be stored in Firestore
      const invoiceData = {
      userName,
      address,
      email,
      phone,
      bankName,
      bankAccount,
      website,
      clientName,
      clientAddress,
      invoiceNumber,
      invoiceDate,
      dueDate,
      notes,
      list,
      total
    };
    
    try {
      setLoading(true);
      await addDoc(collection(db, 'Hovor_Invoices'), {
        User: {
          name: auth.currentUser.displayName,
          email: auth.currentUser.email,
          id: auth.currentUser.uid
        },
        ...invoiceData,
        timestamp: serverTimestamp()
      });
      setLoading(false);
      toast.success('saved successfully!');
      setFormValue(initialState);
      setList([]);
      setLoading(false);
    } catch (error) {
      console.error('Error saving invoice: ', error);
      toast.error('Failed to save invoice. Please try again.');
      setLoading(false);
    }
  }
  };
  
  return (
    <>
     {loading && <LoadSpinner />}
      <main className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start" style={{ maxWidth: "1920px", margin: "auto" }}>
        <form onSubmit={handleSubmit}>
          <section>
            <div className="bg-white p-5 rounded shadow">
              <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-2 gap-10">
                  <InputField
                    label="Your full name"
                    name="userName"
                    type="text"
                    value={userName}
                    onChange={onInputChange}
                    maxLength={56}
                    placeholder="Enter your name"
                  />
                  <InputField
                    label="Enter your address"
                    name="address"
                    type="text"
                    value={address}
                    onChange={onInputChange}
                    maxLength={96}
                    placeholder="Enter your address"
                  />
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <InputField
                    label="Enter your email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onInputChange}
                    maxLength={255}
                    placeholder="Enter your email"
                  />
                  <InputField
                    label="Enter your website"
                    name="website"
                    type="url"
                    value={website}
                    onChange={onInputChange}
                    maxLength={96}
                    placeholder="Enter your website"
                  />
                  <InputField
                    label="Enter your phone"
                    name="phone"
                    type="text"
                    value={phone}
                    onChange={onInputChange}
                    maxLength={12}
                    placeholder="Enter your phone"
                  />
                </article>

                <article className="md:grid grid-cols-2 gap-10">
                  <InputField
                    label="Enter your bank name"
                    name="bankName"
                    type="text"
                    value={bankName}
                    onChange={onInputChange}
                    maxLength={56}
                    placeholder="Enter your bank name"
                  />
                  <InputField
                    label="Enter your bank account number"
                    name="bankAccount"
                    type="number"
                    value={bankAccount}
                    onChange={onInputChange}
                    maxLength={20}
                    placeholder="Enter your bank account number"
                  />
                </article>

                <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                  <InputField
                    label="Enter your client's name"
                    name="clientName"
                    type="text"
                    value={clientName}
                    onChange={onInputChange}
                    maxLength={56}
                    placeholder="Enter your client's name"
                  />
                  <InputField
                    label="Enter your client's address"
                    name="clientAddress"
                    type="text"
                    value={clientAddress}
                    onChange={onInputChange}
                    maxLength={96}
                    placeholder="Enter your client's address"
                  />
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <InputField
                    label="Invoice Number"
                    name="invoiceNumber"
                    type="number"
                    value={invoiceNumber}
                    onChange={onInputChange}
                    placeholder="Invoice Number"
                  />
                  <InputField
                    label="Invoice Date"
                    name="invoiceDate"
                    type="date"
                    value={invoiceDate}
                    onChange={onInputChange}
                    placeholder="Invoice Date"
                  />
                  <InputField
                    label="Due Date"
                    name="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={onInputChange}
                    placeholder="Invoice Date"
                  />
                </article>

                <article>
                  <div className="flex flex-col md:mt-16">
                    <InputField
                      label="Item description"
                      name="description"
                      type="text"
                      value={description}
                      onChange={onInputChange}
                      maxLength={96}
                      placeholder="Item description"
                    />
                  </div>

                  <div className="md:grid grid-cols-3 gap-10">
                    <InputField
                      label="Quantity"
                      name="quantity"
                      type="number"
                      value={quantity}
                      onChange={onInputChange}
                      maxLength={33}
                      placeholder="Quantity"
                    />
                    <InputField
                      label="Price"
                      name="price"
                      type="number"
                      value={price}
                      onChange={onInputChange}
                      maxLength={33}
                      placeholder="Price"
                    />
                    <div className="flex flex-col">
                      <label htmlFor="amount">Amount</label>
                      <p>&#x20A6;{quantity && price ? (quantity * price).toLocaleString() : 0}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="bg-blue-500 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
                  >
                    Add Table Item
                  </button>
                </article>

                <Table list={list} total={total} handleDeleteItem={handleDeleteItem} />

                <label htmlFor="notes">Additional Notes</label>
                <textarea
                  name="notes"
                  id="notes"
                  cols="30"
                  rows="10"
                  placeholder="Additional notes to the client"
                  maxLength={500}
                  value={notes}
                  onChange={onInputChange}
                ></textarea>
            <button
              type="submit"
              className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
            >
              Save Invoice
            </button>
              </div>
            </div>

          </section>
        </form>

        <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200 ">
          <ReactToPrint
            trigger={() => (
              <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                Print / Download
              </button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="p-5">
            <InvoiceHeader />
            <MainDetails formValue={formValue} />
            <ClientDetails formValue={formValue} />
            <Date formValue={formValue} />
            <Table list={list} total={total} handleDeleteItem={handleDeleteItem} />
            <Notes formValue={formValue} />
            <Footer formValue={formValue} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Invoice;

