import React from 'react'
import PropTypes from 'prop-types'

function Level (props) {
  const { text } = props

  if (!text) return ''
  return (
    <div>
      <div className='Card-program'>{text}</div>
      <div className='Card-program-triangle-bottomleft' />
    </div>
  )
}

export default Level

Level.propTypes = {
  text: PropTypes.string.isRequired
}
