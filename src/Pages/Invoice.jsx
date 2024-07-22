import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Invoice = ({isAuth}) => {

    
useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);



  return (
    <div>
      <h2> Invoice page  </h2>
    </div>
  )
}

export default Invoice;


