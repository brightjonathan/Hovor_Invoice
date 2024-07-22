import { createContext, useEffect, useRef, useState } from "react";
import { auth, db } from '../Firebase/Firebase_config';
import { addDoc, collection, getDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";


export const State = createContext();

const initialState = {
   userName: "",
   address:  "",
   email:    "",
   phone:    "",
   bankName: "",
   bankAccount: "",
   website:  "",
   clientName: "",
   clientAddress: "",
   invoiceNumber: "",
   invoiceDate: "",
   dueDate:   "",
   notes:  "",
   description: "",
   quantity: "",
   price:  "",
   amount: "",
   total: 0,
   list: []
};


export default function StateContext({ children }) {

    const [formValue, setFormValue] = useState(initialState);

    //de-structuring the objeect{formValue};
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
        total,
        userName,
        website
    } = formValue;

    //const [list, setList] = useState([]);
   
    const [width] = useState(641);
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
  
    const componentRef = useRef();
  
    //handles the print func...
    const handlePrint = () => {
      window.print();
    };
  

    useEffect(() => {
      if (window.innerWidth < width) {
        alert("Place your phone in landscape mode for the best experience");
      }
    }, [width]);
  
    // Submit form function
    const handleSubmit = async(e) => {
      e.preventDefault();

      try {
        if (
        address === "" ||
        amount === "" ||
        bankAccount === "" ||
        bankName === "" ||
        clientAddress === "" ||
        clientName === "" ||
        description === "" ||
        dueDate === "" ||
        email === "" ||
        invoiceDate === "" ||
        invoiceNumber === "" ||
        notes === "" ||
        phone === "" ||
        price === "" ||
        quantity === "" ||
        userName === "" ||
        website === ""
        ) {
            toast.error("Please fill in all inputs");
        }else{

            const newItems = {
                id: uuidv4(),
                description,
                quantity,
                price,
                amount,
              };
              setFormValue([...list, newItems]);

            await addDoc(collection(db, 'Hovor_Invoice'), {
                User : {
                  name: auth.currentUser.displayName,
                  email: auth.currentUser.email,
                  id: auth.currentUser.uid
                },
                ...formValue,
                timestamp: serverTimestamp()
              })
              navigate('/')
              toast.success('submitted successfully')
           


        }
      } catch (error) {
        console.log(error);
      }
    };
  
    // Calculate items amount function
    useEffect(() => {
      const calculateAmount = (amount) => {
        setFormValue(quantity * price);
      };
  
      calculateAmount(amount);
    }, [ amount, price, quantity ]);
  

  
    // Use collect.js to calculate the total amount of items in the table. This is a much better function than the commented one above.
    const calculateTotal = () => {
      const allItems = list.map((item) => item.price);
  
      setFormValue(collect(allItems).sum());
    };
  
    useEffect(() => {
      calculateTotal();
    });
  
    // Edit function
    // const editRow = (id) => {
    //   const editingRow = list.find((row) => row.id === id);
    //   setList(list.filter((row) => row.id !== id));
    //   setIsEditing(true);
    //   setDescription(editingRow.description);
    //   setQuantity(editingRow.quantity);
    //   setPrice(editingRow.price);
    // };
  
    // Delete function
    // const deleteRow = (id) => {
    //   setList(list.filter((row) => row.id !== id));
    //   setShowModal(false);
    // };
  
    const context = {
      formValue,
      setFormValue,
      //list,
      //setList,
      width,
      componentRef,
      handlePrint,
      isEditing,
      setIsEditing,
      showModal,
      setShowModal,
      handleSubmit,
      editRow,
      deleteRow,
      showLogoutModal,
      setShowLogoutModal,
    };
  
    return <State.Provider value={context}>{children}</State.Provider>;
  }

