import React from 'react'
import PropTypes from 'prop-types'

import StatusScoreCircle from './StatusScoreCircle'

function StatusScore (props) {
  const { status, level } = props

  const circles = new Array(3).fill(null).map((item, index) => {
    const type = parseInt(status, 10) - 1 >= index ? 'full' : 'empty'

    return (
      <StatusScoreCircle key={index} type={type} level={level} />
    )
  })

  return (
    <div className='Card-status-score'>
      {circles}
    </div>
  )
}

export default StatusScore

StatusScore.propTypes = {
  status: PropTypes.string.isRequired,
  level: PropTypes.number
}
