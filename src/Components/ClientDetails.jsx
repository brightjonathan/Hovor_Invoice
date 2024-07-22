import React from 'react'

const ClientDetails = ({formValue}) => {
  return (
    <>
    <section className="mt-10">
      <h2 className="text-2xl uppercase font-bold mb-1">{formValue.clientName}</h2>
      <p> {formValue.clientAddress}</p>
    </section>
  </>
  )
}

export default ClientDetails
