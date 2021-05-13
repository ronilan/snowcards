import React from 'react'
import PropTypes from 'prop-types'

import LevelShape from './LevelShape'

function Level (props) {
  const { level } = props

  if (!level) return ''
  return (
    <div>
      <LevelShape level={level} />
      <div className='Card-level'>Level {level}</div>
    </div>
  )
}

export default Level

Level.propTypes = {
  level: PropTypes.string.isRequired
}
