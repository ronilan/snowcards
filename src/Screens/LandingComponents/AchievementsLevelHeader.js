import React from 'react'
import PropTypes from 'prop-types'

function AchievementsLevelHeader (props) {
  const { levelAchievements } = props

  const text = `Level ${levelAchievements.level}: ${levelAchievements.description}`

  return <div className='Landing-achievements-level-header'>{text}</div>
}

export default AchievementsLevelHeader

AchievementsLevelHeader.propTypes = {
  levelAchievements: PropTypes.object.isRequired
}
