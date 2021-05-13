import React from 'react'
import PropTypes from 'prop-types'

function Comments (props) {
  const { text } = props

  return (
    <div>
      <div className='Card-comments-header'>{text ? 'Comments:' : ''}</div>
      <div className='Card-comments'>{text}</div>
    </div>
  )
}

export default Comments

Comments.propTypes = {
  text: PropTypes.string.isRequired
}
