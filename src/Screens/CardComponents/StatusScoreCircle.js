import React from 'react'
import PropTypes from 'prop-types'

function StatusScoreCircle (props) {
  const { type, level } = props

  const l = parseInt(level)
  const color = (l > 4) ? 'black' : (l === 4 ? 'blue' : (l < 4 ? 'green' : 'none'))
  const colorClassName = type === 'full' ? `Card-status-score-circle-${color}` : ''
  const className = `Card-status-score-circle-${type} ${colorClassName}`

  return (
    <span className='Card-statusScoreCircle-container'>
      <span className={className} />
    </span>
  )
}

export default StatusScoreCircle

StatusScoreCircle.propTypes = {
  type: PropTypes.string.isRequired,
  level: PropTypes.number
}
