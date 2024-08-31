import React from 'react'
import Navbar from '../navbar/Navbar'
import toast from 'react-hot-toast';

function Layout({children}) {
  return (
    <div>
      <Navbar/>

      <div className="content min-h-screen">
        {children}
      </div>

    </div>
  )
}

export default Layout