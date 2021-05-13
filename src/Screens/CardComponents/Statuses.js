import React from 'react'
import PropTypes from 'prop-types'

import StatusLevel from './StatusLevel'
import Legend from './Legend'

import achievements from '../../data/achievements'

function Statuses (props) {
  const { statuses, discipline } = props

  const d = achievements[discipline] || []

  const s = Object.values(d).map((levelStatuses, index) => {
    const level = `${index + 1}`

    return (
      <StatusLevel
        key={`level${level}`}
        discipline={discipline}
        levelStatuses={levelStatuses}
        statuses={statuses}
        level={level}
      />
    )
  })

  return (
    <div className='Card-Statuses-column'>
      <div className='Card-statuses-header'>Achievements:
        <Legend />
      </div>
      {s}

    </div>
  )
}

export default Statuses

Statuses.propTypes = {
  statuses: PropTypes.array.isRequired,
  discipline: PropTypes.string.isRequired
}
