import React from 'react'
import PropTypes from 'prop-types'

import AchievementsLevelHeader from './AchievementsLevelHeader'
import AchievementButtons from './AchievementButtons'
import AchievementDescription from './AchievementDescription'

function AchievementLevel (props) {
  const { setValue, register, discipline, levelAchievements } = props

  const la = levelAchievements.achievements.map(achievement => {
    return (
      <div key={achievement.key} className='Landing-achievements'>
        <AchievementButtons setValue={setValue} register={register} discipline={discipline} achievement={achievement} />
        <AchievementDescription achievement={achievement} />
      </div>
    )
  })

  return (
    <div>
      <AchievementsLevelHeader levelAchievements={levelAchievements} />
      {la}
    </div>
  )
}

export default AchievementLevel

AchievementLevel.propTypes = {
  setValue: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  discipline: PropTypes.string.isRequired,
  levelAchievements: PropTypes.object.isRequired
}
