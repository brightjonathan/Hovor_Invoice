// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ReactToPrint from "react-to-print";
// import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
// //import TableForm from '../Components/TableForm';
// import InvoiceHeader from '../Components/InvoiceHeader';
// import MainDetails from '../Components/MainDetails';
// import ClientDetails from '../Components/ClientDetails';
// import Date from '../Components/Date';
// import Table from '../Components/Table';
// import Notes from '../Components/Notes';
// import Footer from '../Components/Footer';
// import {db} from '../Firebase/Firebase_config'



// const initialState = {
//    userName: "",
//    address:  "",
//    email:    "",
//    phone:    "",
//    bankName: "",
//    bankAccount: "",
//    website:  "",
//    clientName: "",
//    clientAddress: "",
//    invoiceNumber: "",
//    invoiceDate: "",
//    dueDate:   "",
//    notes:  "",
//    description: "",
//    quantity: "",
//    price:  "",
//    amount: "",
//    total: 0,
//    list: []
// };



// const Invoice = ({isAuth}) => {
  
  
//   const navigate = useNavigate(); 
//   const componentRef = useRef();
//   const [formValue, setFormValue] = useState(initialState);

//     //de-structuring the objeect{formValue};
//     const {
//         address,
//         amount,
//         bankAccount,
//         bankName,
//         clientAddress,
//         clientName,
//         description,
//         dueDate,
//         email,
//         invoiceDate,
//         invoiceNumber,
//         notes,
//         phone,
//         price,
//         quantity,
//         userName,
//         website,
//         list
//     } = formValue;


//   //targeting the input fields
//   const onInputChange = (e)=>{
//     setFormValue({...formValue, [e.target.name]: e.target.value})
//   };

// useEffect(()=>{
//     if(!isAuth){
//       navigate('/signin');
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isAuth]);


//   const HandleSubmit = async(e) => {
//     e.preventDefault();

//     console.log('hello world');
//   }



//   return (
//     <>
//       <main
//         className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
//         style={{
//           maxWidth: "1920px",
//           margin: "auto",
//         }}
//       >
//         <form onSubmit={HandleSubmit}>

//         <section>
//           <div className="bg-white p-5 rounded shadow">
//             <div className="flex flex-col justify-center">
//               <article className="md:grid grid-cols-2 gap-10">
//                 <div className="flex flex-col">
//                   <label htmlFor="name">Your full name</label>
//                   <input
//                     type="text"
//                     required
//                     id="name"
//                     placeholder="Enter your name"
//                     maxLength={56}
//                     autoComplete="off"
//                     name="userName"
//                     value={userName}
//                     onChange={onInputChange}
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="address">Enter your address</label>
//                   <input
//                     required
//                     type="text"
//                     id="address"
//                     placeholder="Enter your address"
//                     autoComplete="off"
//                     maxLength={96}
//                     name="address"
//                     value={address}
//                     onChange={onInputChange}
//                   />
//                 </div>
//               </article>

//               <article className="md:grid grid-cols-3 gap-10">
//                 <div className="flex flex-col">
//                   <label htmlFor="email">Enter your email</label>
//                   <input
//                     type="email"
//                     required
//                     id="email"
//                     placeholder="Enter your email"
//                     maxLength={255}
//                     autoComplete="off"
//                     name="email"
//                     value={email}
//                     onChange={onInputChange}
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="website">Enter your website</label>
//                   <input
//                     type="url"
//                     id="website"
//                     placeholder="Enter your website"
//                     maxLength={96}
//                     autoComplete="off"
//                     name="website"
//                     value={website}
//                     onChange={onInputChange}
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="phone">Enter your phone</label>
//                   <input
//                     type="text"
//                     required
//                     id="phone"
//                     placeholder="Enter your phone"
//                     maxLength={12}
//                     autoComplete="off"
//                     name="phone"
//                     value={phone}
//                     onChange={onInputChange}
//                   />
//                 </div>
//               </article>

//               <article className="md:grid grid-cols-2 gap-10">
//                 <div className="flex flex-col">
//                   <label htmlFor="bankName">Enter your bank name</label>
//                   <input
//                     type="text"
//                     required
//                     id="bankName"
//                     placeholder="Enter your bank name"
//                     maxLength={56}
//                     autoComplete="off"
//                     name="bankName"
//                     value={bankName}
//                     onChange={onInputChange}
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="bankAccount">
//                     Enter your bank account number
//                   </label>
//                   <input
//                     type="number"
//                     required
//                     id="bankAccount"
//                     placeholder="Enter your bank account number"
//                     maxLength={20}
//                     autoComplete="off"
//                     name="bankAccount"
//                     value={bankAccount}
//                     onChange={onInputChange}
//                   />
//                 </div>
//               </article>

//               <article className="md:grid grid-cols-2 gap-10 md:mt-16">
//                 <div className="flex flex-col">
//                   <label htmlFor="clientName">Enter your client's name</label>
//                   <input
//                     type="text"
//                     required
//                     id="clientName"
//                     placeholder="Enter your client's name"
//                     maxLength={56}
//                     autoComplete="off"
//                     name="clientName"
//                     value={clientName}
//                     onChange={onInputChange}
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="clientAddress">
//                     Enter your client's address
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     name="clientAddress"
//                     id="clientAddress"
//                     placeholder="Enter your client's address"
//                     maxLength={96}
//                     autoComplete="off"
//                     value={clientAddress}
//                     onChange={onInputChange}
//                   />
//                 </div>
//               </article>

//               <article className="md:grid grid-cols-3 gap-10">
//                 <div className="flex flex-col">
//                   <label htmlFor="invoiceNumber">Invoice Number</label>
//                   <input
//                     type="number"
//                     required
//                     name="invoiceNumber"
//                     id="invoiceNumber"
//                     placeholder="Invoice Number"
//                     autoComplete="off"
//                     value={invoiceNumber}
//                     onChange={onInputChange}
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="invoiceDate">Invoice Date</label> 
//                   <input
//                     required
//                     type="date"
//                     name="invoiceDate"
//                     id="invoiceDate"
//                     placeholder="Invoice Date"
//                     autoComplete="off"
//                     value={invoiceDate}
//                     onChange={onInputChange}
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="dueDate">Due Date</label>
//                   <input
//                     required
//                     type="date"
//                     name="dueDate"
//                     id="dueDate"
//                     placeholder="Invoice Date"
//                     autoComplete="off"
//                     value={dueDate}
//                     onChange={onInputChange}
//                   />
//                 </div>
//               </article>

//               {/* This is our table form */}
//               <article>
//                 {/* <TableForm formValue={formValue} onInputChange={onInputChange} /> */}


//                 <>
    
//         <div className="flex flex-col md:mt-16">
//           <label htmlFor="description">Item description</label>
//           <input
//             required
//             type="text"
//             name="description"
//             id="description"
//             placeholder="Item description"
//             maxLength={96}
//             value={description}
//             onChange={onInputChange}
//           />
//         </div>

//         <div className="md:grid grid-cols-3 gap-10">
//           <div className="flex flex-col">
//             <label htmlFor="quantity">Quantity</label>
//             <input
//              required
//               type="number"
//               name="quantity"
//               id="quantity"
//               placeholder="Quantity"
//               maxLength={33}
//               value={quantity}
//               onChange={onInputChange}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="price">Price</label>
//             <input
//               required
//               type="number"
//               name="price"
//               id="price"
//               placeholder="Price"
//               maxLength={33}
//               value={price}
//               onChange={onInputChange}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="amount">Amount</label>
//             <p>{amount}</p>
//           </div>
//         </div>
        

//       {/* Table items */}

//       <table width="100%" className="mb-10 overflow-auto">
//         <thead>
//           <tr className="bg-gray-100 p-1">
//             <td className="font-bold">Description</td>
//             <td className="font-bold">Quantity</td>
//             <td className="font-bold">Price</td>
//             <td className="font-bold">Amount</td>
//           </tr>
//         </thead>
//         {list.map(({ id, description, quantity, price, amount }) => (
//           <React.Fragment key={id}>
//             <tbody>
//               <tr className="h-10">
//                 <td>{description}</td>
//                 <td>{quantity}</td>
//                 <td>{price}</td>
//                 <td className="amount">{amount}</td>
//                 <td>
//                   <button >
//                     <AiOutlineEdit className="text-green-500 font-bold text-xl" />
//                   </button>
//                 </td>
//                 <td>
//                   <button >
//                     <AiOutlineDelete className="text-red-500 font-bold text-xl" />
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//             {/* {showModal && <DeleteModal id={id} />} */}
//           </React.Fragment>
//         ))}
//       </table>

//       <div>
//         <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
//         {/* &#x20A6; {total.toLocaleString()} */}
//         </h2>
//       </div>
//     </>
//               </article>

//               <label htmlFor="notes">Additional Notes</label>
//               <textarea
//                 name="notes"
//                 id="notes"
//                 cols="30"
//                 rows="10"
//                 placeholder="Additional notes to the client"
//                 maxLength={500}
//                 value={notes}
//                 onChange={onInputChange}
//               ></textarea>
//             </div>

//             <button
//             type="submit"
//            className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
//            >
//           {/* {isEditing ? "Finish Editing" : "Add Table Item"} */}
//           Add Table Item
//           </button>
//           </div>

//           <article className="mt-5">
//             {/* <DonateButton /> */}
//           </article>

          
//         </section>
//                 </form>

//         {/* Invoice Preview */}
//         <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200 " >
//            <ReactToPrint
//             trigger={() => (
//               <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
//                 Print / Download
//               </button>
//             )}
//             content={() => componentRef.current}
//           /> 
//           <div  ref={componentRef} className="p-5">
//             <InvoiceHeader />

//             <MainDetails formValue={formValue} />

//             <ClientDetails formValue={formValue} />

//             <Date formValue={formValue}/>

//             <Table formValue={formValue}/>

//             <Notes formValue={formValue}/>

//             <Footer formValue={formValue}/>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }

// export default Invoice;



import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactToPrint from "react-to-print";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
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

const InputField = ({ label, name, type, value, onChange, required = true, maxLength, placeholder }) => (
  <div className="flex flex-col">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
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

  const {
    address,
    amount,
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
    website,
    total
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate the total amount
    const total = list.reduce((acc, item) => acc + item.amount, 0);

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
      await addDoc(collection(db, 'Hovor_Invoices'), {
        User: {
          name: auth.currentUser.displayName,
          email: auth.currentUser.email,
          id: auth.currentUser.uid
        },
        ...invoiceData,
        timestamp: serverTimestamp()
      });
      alert('Invoice saved successfully!');
      setFormValue(initialState);
      setList([]);
    } catch (error) {
      console.error('Error saving invoice: ', error);
      alert('Failed to save invoice. Please try again.');
    }
  };

  return (
    <>
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
                      <p>&#x20A6;{ quantity && price ? (quantity * price).toFixed(2) : 0}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
                  >
                    Add Table Item
                  </button>
                </article>

                <article>
                  <table width="100%" className="mb-10">
                    <thead>
                      <tr className="bg-gray-100 p-1">
                        <td className="font-bold">Description</td>
                        <td className="font-bold">Quantity</td>
                        <td className="font-bold">Price</td>
                        <td className="font-bold">Amount</td>
                        <td className="font-bold">Action</td>
                      </tr>
                    </thead>

                    {list.map(({ id, description, quantity, price, amount }) => (
                      <tbody key={id}>
                        <tr>
                          <td>{description}</td>
                          <td>{quantity}</td>
                          <td>{price}</td>
                          <td>&#x20A6;{amount.toLocaleString()}</td>
                          <td>
                            <button onClick={() => handleDeleteItem(id)}>
                              <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>

                  <div>
                    <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
                      &#x20A6;{total.toLocaleString()}
                    </h2>
                  </div>
                </article>

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
              </div>
            <button
              type="submit"
              className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
            >
              Save Invoice
            </button>
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
            <Table formValue={formValue} />
            <Notes formValue={formValue} />
            <Footer formValue={formValue} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Invoice;






