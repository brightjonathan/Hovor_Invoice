import React from 'react'

const MainDetails = ({formValue}) => {
  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className="font-bold text-3xl uppercase mb-1"> {formValue.userName} </h2>
        <p> {formValue.address}</p>
      </section>
    </>
  )
}

export default MainDetails;
