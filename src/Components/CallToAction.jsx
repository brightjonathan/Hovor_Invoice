import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <>
      <div className="bg-[#131616] py-10 lg:py-32">
        <section className="max-width">
          <div className="md:grid grid-cols-2 gap-10 md:place-items-center">
            <article>
              <h2 className="text-[#DDE1E7] font-bold text-3xl md:text-4xl mb-5">
                Login or Create An Account to Get Started
              </h2>
              <p className="mb-10 text-[#DDE1E7]">
                No credit cards, no subscriptions! Simply create an account and
                begin creating invoices for your clients.
              </p>
            </article>

            <article>
              <ul className="flex items-center justify-center">
                <li className="mr-3">
                <Link to={'/register'} className="bg-[#166534] py-2 px-6 rounded text-base hover:bg-[#bbf0cf] text-white transition-all duration-150 hover:text-[black]  shadow-lg hover:ring-4 hover:ring-[#bbf0cf]"> Log In or Create Account </Link>
                </li>
                <li className="">
                  {/* <LogIn /> */}
                </li>
              </ul>
            </article>
          </div>
        </section>
      </div>

      <div className="slant-left"></div>
    </>
  )
}

export default CallToAction
