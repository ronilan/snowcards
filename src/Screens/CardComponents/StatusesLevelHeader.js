import React from 'react'
import PropTypes from 'prop-types'

function StatusesLevelHeader (props) {
  const { levelStatuses } = props

  const text = `Level ${levelStatuses.level}: ${levelStatuses.description}`

  return <div className='Card-statuses-level-header'>{text}</div>
}

export default StatusesLevelHeader

StatusesLevelHeader.propTypes = {
  levelStatuses: PropTypes.object.isRequired
}
