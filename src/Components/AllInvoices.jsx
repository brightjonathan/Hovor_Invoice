import { useState, useEffect, useRef } from 'react';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import '../Utility/AllInvoices.css';
import ReactToPrint from 'react-to-print';
import logo from '../assets/rifco-logo.png';
import { auth, db } from '../Firebase/Firebase_config';
import LoadSpinner from '../Utility/LoadSpinner';
import Notiflix from 'notiflix';
import { MdOutlineDeleteOutline } from "react-icons/md";
import html2pdf from 'html2pdf.js';


const AllInvoices = ({isAuth}) => {

    const componentRefs = useRef([]);
    const [Allinvoices, setAllinvoices] = useState([]);
    const [isloading, setisloading] = useState(false);


    useEffect(()=>{
        try {
            setisloading(true);
            const getBlogs = onSnapshot(
                collection(db, 'Hovor_Invoices'),
                (snapshot) =>{
                  let list = []
                  snapshot.docs.forEach((doc)=>{
                    list.push({id: doc.id, ...doc.data()});
                  });
                  setAllinvoices(list);
                  //console.log(list);
                  setisloading(false);
          
                }, (err)=>{
                  console.log(err)
                }
              )
          
              return ()=>{
                getBlogs();
              }


        } catch (error) {
            console.log(error);
        }
        
    
    },[])
    


      //delete functionality
  const invoice_delete = async (id)=>{
      try {
        const postDoc = doc(db, 'Hovor_Invoices', id);
        await deleteDoc(postDoc)
        toast.success('deleted successfully')
        //navigate('/post')
      } catch (err) {
        console.log(err)
      }
    
  };


const confirmLogOut = (id)=>{
  Notiflix.Confirm.show(
    "Deleting Invoice!!!",
    "You are about to Delete this invoice",
    "Yes",
    "Cancel",
    function okCb() {
        invoice_delete(id);
    },
    function cancelCb() {
      console.log("Delete Canceled");
    },
    {
      width: "320px",
      borderRadius: "3px",
      titleColor: "orangered",
      okButtonBackground: "orangered",
      cssAnimationStyle: "zoom",
    }
  )
}


const downloadInvoice = (index) => {
  const invoiceElement = componentRefs.current[index];
  const opt = {
      margin: 1,
      filename: `invoice_${index + 1}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(invoiceElement).set(opt).save();
};


  return (
    <>
    {isloading && <LoadSpinner />}
    {!isloading && (Allinvoices && Allinvoices.length !== 0 ? (
      <>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 gap-x-6 gap-y-16 px-4 pt-10 sm:pt-10 text-black'>
          {Allinvoices.map((item, index) => (
            <div key={item.id}>
              <div className="invoice-wrapper" ref={el => (componentRefs.current[index] = el)}>
                <div className="invoice">
                  {/* <div className="invoice-btns cursor-auto">
                    <ReactToPrint
                      trigger={() => (
                        <button type="button" className="invoice-btn cursor-pointer">
                          <span> <i className="fa-solid fa-print"></i> </span>
                          <span>Download</span>
                        </button>
                      )}
                      content={() => componentRefs.current[index]}
                    />
                  </div> */}

                    <div className="invoice-btns cursor-auto">
                      <button
                      type="button"
                      className="invoice-btn cursor-pointer"
                      onClick={() => downloadInvoice(index)}
                      >
                      {/* <span><i className="fa-solid fa-download"></i></span> */}
                      <span>Download</span>
                    </button>
                  </div>                   
  
                  <div className="invoice-container">
                    <div className="invoice-head">
                      <div className="invoice-head-top">
                        <div className="invoice-head-top-left text-start mt-[-4vh]">
                          <img src={logo} alt="Logo" />
                          <p className='text-[9px]'>Interior Decor | Furnishing | Art | Consulting | Printing</p>
                        </div>
                        <div className="invoice-head-top-right text-end">
                          <h3 className='text-[red]'>Invoice</h3>
                        </div>
                      </div>
                      <div className="hr"></div>
                      <div className="invoice-head-middle">
                        <div className="invoice-head-middle-left text-start">
                          <p className='text-[green]'><span className="text-bold">Date:</span> <span className='text-[18px]'>{item.invoiceDate}</span></p>
                        </div>
                        <div className="invoice-head-middle-right text-end">
                          <p className='text-[green]'><span className="text-bold">Invoice No:</span> <span className='text-[18px]'>{item.invoiceNumber}</span></p>
                        </div>
                      </div>
                      <div className="hr"></div>
                      <div className="invoice-head-bottom">
                        <div className="invoice-head-bottom-left">
                          <ul>
                            <li className='text-bold'>Invoiced To:</li>
                            <li>{item.clientName}</li>
                            <li>{item.dueDate}</li>
                            <li>{item.clientAddress}</li>
                          </ul>
                        </div>
                        <div className="invoice-head-bottom-right">
                          <ul className="text-end">
                            <li className='text-bold'>Pay To:</li>
                            <li>{item.userName}</li>
                            <li>{item.address}</li>
                            <li>{item.email}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-view">
                      <div className="invoice-body">
                        <table>
                          <thead>
                            <tr>
                              <td className="text-bold">Description</td>
                              <td className="text-bold">Price</td>
                              <td className="text-bold">QTY</td>
                              <td className="text-bold">Amount</td>
                            </tr>
                          </thead>
                          <tbody>
                            {item.list?.map((listItem, listIndex) => (
                              <tr key={listIndex}>
                                <td>{listItem.description}</td>
                                <td>&#x20A6;{listItem.price.toLocaleString()}</td>
                                <td>{listItem.quantity}</td>
                                <td className="text-end">&#x20A6;{listItem.amount.toLocaleString()}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="invoice-body-bottom">
                          <div className="invoice-body-info-item">
                            <div className="info-item-td text-end text-bold">Total:</div>
                            <div className="info-item-td text-end text-bold">&#x20A6;{item.total.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="invoice-foot text-center">
                      <p><span className="text-bold text-center">NOTE:&nbsp;</span> <span className='text-[12px]'>This Invoice does not require a physical signature.</span></p>
                    </div>
  
                    {isAuth && item.User.id === auth.currentUser.uid && (
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => {confirmLogOut(item.id)}}
                          type="button" 
                          className="invoice-btn bg-[#2DD4BF] text-white p-2 rounded">
                          <span><MdOutlineDeleteOutline /></span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    ) : (
      <h2 className='text-[black]'> No invoice found </h2>
    ))}
  </>
  
  )
}

export default AllInvoices;


