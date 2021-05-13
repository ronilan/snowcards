import React from 'react'
import PropTypes from 'prop-types'

function Discipline (props) {
  const { text } = props

  return text ? <div className='Card-discipline'>{text.charAt(0).toUpperCase() + text.slice(1)} Achievement Card</div> : ''
}

export default Discipline

Discipline.propTypes = {
  text: PropTypes.string.isRequired
}
