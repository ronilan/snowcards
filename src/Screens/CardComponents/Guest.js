import React from 'react'
import PropTypes from 'prop-types'

import Level from './Level'
import Comments from './Comments'
import Signature from './Signature'

function Guest (props) {
  const { text, level, comments, instructor, date } = props

  return (
    <div className='Card-guest-column'>
      <div className='Card-guest'>{text}</div>
      <Level level={level} />
      <Comments text={comments || ''} />
      <Signature instructor={instructor} date={date} />
    </div>
  )
}

export default Guest

Guest.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}
