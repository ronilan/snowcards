import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

function Generate (props) {
  const { show } = props

  return show
    ? (
      <div>
        <Link to='/card' className='Form-link-generate'>Generate Card</Link>
      </div>
      )
    : 'Please fill required fields marked with *'
}

export default Generate

Generate.propTypes = {
  show: PropTypes.bool.isRequired
}
