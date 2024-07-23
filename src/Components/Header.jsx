import { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from '../Utility/NavbarData'
import CreateAccount from "../Pages/CreateAccount";
import Logout from "../Pages/Logout";
import logo from '../assets/rifco-logo.png';

const Header = ({ isAuth, handleSignOut }) => {


    const [links] = useState(navbarData)
    const [isOpen, setIsOpen] = useState(false)


    const handleClick = () => {
        setIsOpen(true)
        const navbar = document.querySelector(".navbar")
        const listItems = document.querySelectorAll(".list-item")
    
        navbar.classList.toggle("open")
        setIsOpen(!isOpen)
    
        listItems.forEach((item) => {
          item.addEventListener("click", () => navbar.classList.remove("open"))
          setIsOpen(false)
        })
      }
    



  return (
    <>
      <header className="p-5 flex items-center justify-between xl:max-w-7xl lg:mx-auto 2xl:px-0  ">
        <div>
          <h2 className="font-bold text-4xl text-gray-800">
            <Link to="/" > <img src={logo} alt="logo" width={100} /></Link>
          </h2>
        </div>

        <nav className="navbar">
          <ul>
            {links.map(({ id, title, url_path }) => (
              <div key={id}>
                <li key={id} className="list-item">
                  <Link to={url_path} className="text-base text-slate-700">
                    {title}
                  </Link>
                </li>
              </div>
            ))}
           

            <li>
                {
                isAuth ? <Logout handleSignOut={handleSignOut} /> : <Link to={'/register'} className="bg-[#166534] py-2 px-6 rounded text-base hover:bg-[#bbf0cf] text-white transition-all duration-150 hover:text-[black]  shadow-lg hover:ring-4 hover:ring-[#bbf0cf]"> Log In or Create Account </Link> 
                }
            </li>
            <li>
            <Link to={'/all-invoices-receipt'} className="bg-[#166534] py-2 px-6 rounded text-base hover:bg-[#bbf0cf] text-white transition-all duration-150 hover:text-[black]  shadow-lg hover:ring-4 hover:ring-[#bbf0cf]"> All invoices and Receipt </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <div
            onClick={handleClick}
            className="text-sm uppercase transition-all duration-500 text-slate-700"
          >
            {isOpen ? "Close" : "Menu"}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
