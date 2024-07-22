import React from 'react'

const Date = ({formValue}) => {
  return (
    <>
    <article className="mt-10 mb-14 flex items-end justify-end">
      <ul>
        <li className="p-1 ">
          <span className="font-bold">Invoicer number:</span> {formValue.invoiceNumber}
        </li>
        <li className="p-1 bg-gray-100">
          <span className="font-bold">Invoice date:</span> {formValue.invoiceDate}
        </li>
        <li className="p-1 ">
          <span className="font-bold">Due date:</span> {formValue.dueDate}
        </li>
      </ul>
    </article>
  </>
  )
}

export default Date
