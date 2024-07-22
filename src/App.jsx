import { useEffect, useState } from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import ScrollTop from './Utility/ScrollTop';
import Header from './Components/Header';
import { auth } from './Firebase/Firebase_config';
import Home from './Pages/Home';
import CreateAccount from './Pages/CreateAccount';
import LogIn from './Pages/LogIn';
import { signOut } from 'firebase/auth';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Invoice from './Pages/Invoice';

const App = () => {


  const [user, setuser] = useState(null);
  const [isAuth, setisAuth] = useState(localStorage.getItem('LoggedIn_invoice'));

  //auth user with useEffect
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
     if (authUser){
       setuser(authUser);
     }else{
       setuser(null)
     }
    })
 },[user])


 const signUserOut = () => {
  signOut(auth).then(() => {
    localStorage.clear();
    setisAuth(false);
  window.location.pathname = '/signin'
  })
}


  return (
    <>
    <ToastContainer position='top-right' />
       <ScrollTop/>
       <Header handleSignOut={signUserOut} isAuth={isAuth} />

       <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/register' element={ <CreateAccount setisAuth={setisAuth} /> } />
        <Route path='/signin' element={ <LogIn setisAuth={setisAuth} setuser={setuser}/> } />
        <Route path='/invoice' element={<Invoice isAuth={isAuth}/>}/>
       </Routes>
    </>
  )
}

export default App;


