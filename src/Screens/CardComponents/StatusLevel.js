import React from 'react'
import PropTypes from 'prop-types'

import StatusesLevelHeader from './StatusesLevelHeader'
import StatusScore from './StatusScore'
import StatusDescription from './StatusDescription'

function StatusLevel (props) {
  const { discipline, levelStatuses, statuses } = props

  const ls = levelStatuses.achievements.map(achievement => {
    const statusKey = `achievement-${discipline}-${achievement.key}`
    const found = statuses.find(status => Object.keys(status)[0] === statusKey) || []
    const value = found[statusKey] || '0'

    return (
      <div key={achievement.key} className='Card-status'>
        <StatusScore level={levelStatuses.level} status={value} />
        <StatusDescription description={achievement.description} />
      </div>
    )
  })

  return (
    <div>
      <StatusesLevelHeader levelStatuses={levelStatuses} />
      <div className='Card-statuses'>{ls}</div>
    </div>
  )
}

export default StatusLevel

StatusLevel.propTypes = {
  discipline: PropTypes.string.isRequired,
  levelStatuses: PropTypes.object.isRequired,
  statuses: PropTypes.array.isRequired
}
