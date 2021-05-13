import React from 'react'
import PropTypes from 'prop-types'

function AchievementDescription (props) {
  const { achievement } = props

  return <span className='Landing-achievement-description'>{achievement.description}</span>
}

export default AchievementDescription

AchievementDescription.propTypes = {
  achievement: PropTypes.object.isRequired
}
