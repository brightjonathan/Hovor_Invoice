import React from 'react'
import { Link } from 'react-router-dom'

const MainFooter = () => {
  return (
    <>
    <div className="bg-teal-900 py-10 lg:py-20 relative">
      <div className="slant-footer"></div>
      <footer className="max-width grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="text-white text-3xl"> R.I.F.C.E.O </h2>
        </div>

        <ul className="">
          <li className="my-3">
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About Us
            </Link>
          </li>
          <li className="my-3">
            <Link to="/invoice" className="text-white">
              Create Invoice 
            </Link>
          </li>
          <li className="my-3">
            <Link to="/" className="text-white">
              Create Receipt
            </Link>
          </li>
          <li>
            <Link to="/suggestion-box" className="text-white">
              Suggestion Box
            </Link>
          </li>
        </ul>

        <ul className="">
          <li className="">
          <Link to={'/register'} className="bg-[#166534] py-2 px-6 rounded text-base hover:bg-[#bbf0cf] text-white transition-all duration-150 hover:text-[black]  shadow-lg hover:ring-4 hover:ring-[#bbf0cf]"> Log In or Create Account </Link>
          </li>
          <li className="my-5">
            {/* <LogIn /> */}
          </li>
          <li>
            {/* <DonateButton /> */}
          </li>
        </ul>
        <p className="text-slate-200">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/bright-jonathan-554970212/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-slate-50"
          >
            Bright Jonathan
          </a>
        </p>
      </footer>
    </div>
  </>
  )
}

export default MainFooter
