import React from 'react'

import logo from '../../data/logo.png'

function Header () {
  return (
    <header className='Landing-header'>
      <div className='Landing-logo'>
        <img src={logo} alt='logo' className='Landing-logo-img' />
      </div>
      <h2>Achievement Card Generator</h2>
      <hr />
    </header>
  )
}

export default Header
