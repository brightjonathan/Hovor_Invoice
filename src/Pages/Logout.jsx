import React from 'react'

const Logout = ({handleSignOut}) => {
  return (
    <button
     onClick={handleSignOut}
      className="bg-white py-2 px-6 rounded text-base hover:bg-gray-800 text-gray-800 transition-all duration-150 hover:text-white hover:ring-4 hover:ring-gray-400"
    >
      Log Out
    </button>
  )
}

export default Logout
