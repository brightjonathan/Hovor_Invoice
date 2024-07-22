import React from 'react';
import hero from '../assets/rifeo.png';
import '../Utility/Animate.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <section className="max-width">
      <section className="py-10 lg:py-32">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:place-items-center md:gap-10 lg:gap-20">
          <article className="fade-in">
            <h1 className="text-slate-700 mb-5 text-4xl md:text-5xl font-bold text-center md:text-left slide-up">
              Create invoices with R.I.F.C.E.O
            </h1>
            <article className="md:hidden">
              <img
                src={hero}
                alt="Create Invoices Easily"
                title="Create Invoices Easily"
                className="block mx-auto rounded slide-up"
              />
            </article>
            <p className="text-slate-700 mt-5 md:mt-0 mb-5 text-center md:text-left slide-up">
              Easily create, download and print invoices for your clients. No more unsurety, just Invoicer It!
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              <li className="mr-3 slide-up">
              <Link to={'/register'} className="bg-[#166534] py-2 px-6 rounded text-base hover:bg-[#bbf0cf] text-white transition-all duration-150 hover:text-[black]  shadow-lg hover:ring-4 hover:ring-[#bbf0cf]"> Log In or Create Account </Link>
              </li>
              <li className="slide-up">
                {/* <LogIn /> */}
              </li>
            </ul>
            {/* <div>
              <p className="text-slate-700 mt-5 text-center md:text-left">
                Do you like Invoicer? Check out my other app called{" "}
                <a
                  href="https://diarry.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-slate-700"
                >
                  Diarry
                </a>
              </p>
            </div> */}
          </article>
          <article className="hidden md:block slide-up">
            <img
              src={hero}
              alt="Create Invoices Easily"
              title="Create Invoices Easily"
              className="rounded"
            />
          </article>
        </div>
      </section>
    </section>
    <div className="slant"></div>
  </>
  )
}

export default Home;
