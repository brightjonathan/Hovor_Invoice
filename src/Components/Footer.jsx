import React from 'react'

const Footer = ({formValue}) => {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your name:</span> {formValue.userName}
          </li>
          <li>
            <span className="font-bold">Your email:</span> {formValue.email}
          </li>
          <li>
            <span className="font-bold">Phone number:</span> {formValue.phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {formValue.bankName}
          </li>
          <li>
            <span className="font-bold">Account holder:</span> {formValue.bankName}
          </li>
          <li>
            <span className="font-bold">Account number:</span> {formValue.bankAccount}
          </li>
          <li>
            <span className="font-bold">Website:</span>{" "}
            <a href='#' target="_blank" rel="noopenner noreferrer">
              {formValue.website}
            </a>
          </li>
        </ul>
      </footer>

      <p className="text-center px-5 mt-8 text-xs ">
        built by{" "}
        <a
          href="https://www.linkedin.com/in/bright-jonathan-554970212/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Bright Jonathan
        </a>
      </p>
    </>
  )
}

export default Footer;
