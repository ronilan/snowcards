import React from 'react'
import PropTypes from 'prop-types'

import logo from '../../data/logo.png'
import headerImage from '../../data/header.jpeg'

import Discipline from './Discipline'
import Program from './Program'

function Header (props) {
  const { program, discipline } = props

  return (
    <header className='Card-header'>
      <Discipline text={discipline} />
      <div className='Card-logo'>
        <img src={logo} alt='logo' className='Card-logo-img' />
      </div>
      <img src={headerImage} id='Card-header-img' className='Card-header-img' alt='background' />
      <Program text={program} />
    </header>
  )
}

export default Header

Header.propTypes = {
  discipline: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired
}
