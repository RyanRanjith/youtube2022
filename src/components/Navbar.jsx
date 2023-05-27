import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Lama chat</span>
      <div className="user"></div>
      <img src="https://images.pexels.com/photos/16577585/pexels-photo-16577585.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt=""/>
      <span>John</span>
      <button>logout</button>
    </div>
  )
}

export default Navbar
