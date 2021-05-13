import React from 'react'
import PropTypes from 'prop-types'

function Signature (props) {
  const { instructor, date } = props

  return (
    <div className='Card-signature'>
      <div className='Card-instructor'>Instructor: {instructor}</div>
      <div className='Card-date'>{date ? `Date: ${date}` : ''}</div>
    </div>
  )
}

export default Signature

Signature.propTypes = {
  date: PropTypes.string,
  instructor: PropTypes.string.isRequired
}
