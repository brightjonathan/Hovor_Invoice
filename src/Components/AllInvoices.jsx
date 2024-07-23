import { useState, useEffect, useRef } from 'react';
import { collection, onSnapshot} from 'firebase/firestore';
import '../Utility/AllInvoices.css';
import ReactToPrint from 'react-to-print';
import logo from '../assets/rifco-logo.png';
import { db } from '../Firebase/Firebase_config';
import LoadSpinner from '../Utility/LoadSpinner';

const AllInvoices = () => {

    const componentRef = useRef();
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
    


  return (
    <>
    {isloading && <LoadSpinner />}
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 0 lg:grid-cols-2 gap-x-6 gap-y-16 px-4 pt-10 sm:pt-10 text-black'>
       
    {Allinvoices?.map((item)=>{
        return(
          <div key={item.id}>
            
            
          </div>
        )
       })}
    


      </div>

    </>
  )
}

export default AllInvoices;


{/* <div class="invoice-wrapper" ref={componentRef}>
            <div class="invoice" >

            <div class = "invoice-btns">
                <ReactToPrint
                  trigger={() => (
                  <button type = "button" className="invoice-btn">
                    <span> <i class="fa-solid fa-print"></i> </span>
                    <span>Download</span>
                  </button>  
                  )}
                  content={() => componentRef.current}
                />
            </div>


                <div className = "invoice-container" >
                    <div className = "invoice-head" >
                        <div className = "invoice-head-top" >
                            <div className = "invoice-head-top-left text-start mt-[-4vh]">
                                <img src={logo} />
                                <p className='text-[9px]'>interior Decor | Furnishing | Art | Consulting | Printing</p>
                            </div>
                            <div className = "invoice-head-top-right text-end">
                                <h3>Invoice</h3>
                            </div>
                        </div>
                        <div className = "hr"></div>
                        <div className = "invoice-head-middle">
                            <div className = "invoice-head-middle-left text-start">
                                <p><span class = "text-bold">Date</span>: 05/12/2020</p>
                            </div>
                            <div className = "invoice-head-middle-right text-end">
                                <p><span class = "text-bold">Invoice No:</span>16789</p>
                            </div>
                        </div>
                        <div className = "hr"></div>
                        <div className = "invoice-head-bottom">
                            <div className = "invoice-head-bottom-left">
                                <ul>
                                    <li className = 'text-bold'>Invoiced To:</li>
                                    <li>Smith Rhodes</li>
                                    <li>15 Hodges Mews, High Wycombe</li>
                                    <li>HP12 3JL</li>
                                    <li>United Kingdom</li>
                                </ul>
                            </div>
                            <div className = "invoice-head-bottom-right">
                                <ul className = "text-end">
                                    <li className = 'text-bold'>Pay To:</li>
                                    <li>Koice Inc.</li>
                                    <li>2705 N. Enterprise</li>
                                    <li>Orange, CA 89438</li>
                                    <li>contact@koiceinc.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className = "overflow-view">
                        <div className = "invoice-body">
                            <table>
                                <thead>
                                    <tr>
                                        <td className = "text-bold">Service</td>
                                        <td className = "text-bold">Description</td>
                                        <td className = "text-bold">Rate</td>
                                        <td className = "text-bold">QTY</td>
                                        <td className = "text-bold">Amount</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Design</td>
                                        <td>Creating a website design</td>
                                        <td>$50.00</td>
                                        <td>10</td>
                                        <td class = "text-end">$500.00</td>
                                    </tr>
                                    <tr>
                                        <td>Development</td>
                                        <td>Website Development</td>
                                        <td>$50.00</td>
                                        <td>10</td>
                                        <td className = "text-end">$500.00</td>
                                    </tr>
                                    <tr>
                                        <td>SEO</td>
                                        <td>Optimize the site for search engines (SEO)</td>
                                        <td>$50.00</td>
                                        <td>10</td>
                                        <td className = "text-end">$500.00</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            <div className = "invoice-body-bottom">
                                <div className = "invoice-body-info-item">
                                    <div className = "info-item-td text-end text-bold">Total:</div>
                                    <div className = "info-item-td text-end">$2150.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "invoice-foot text-center">
                        <p><span className = "text-bold text-center">NOTE:&nbsp;</span>This is computer generated receipt and does not require physical signature.</p>
                    </div>
                </div>
            </div>
        </div> */}