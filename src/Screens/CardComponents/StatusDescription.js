import React from 'react'
import PropTypes from 'prop-types'

function StatusDescription (props) {
  const { description } = props

  return <span className='Card-status-description'>{description}</span>
}

export default StatusDescription

StatusDescription.propTypes = {
  description: PropTypes.string.isRequired
}
