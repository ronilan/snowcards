import React from 'react'
import PropTypes from 'prop-types'

import AchievementLevel from './AchievementLevel'

import achievements from '../../data/achievements'

function Achievements (props) {
  const { setValue, register, discipline } = props

  const d = achievements[discipline] || []

  const final = Object.values(d).map((levelAchievements, index) => {
    const level = `${index + 1}`

    return (
      <AchievementLevel
        key={`level${level}`}
        setValue={setValue}
        register={register}
        discipline={discipline}
        levelAchievements={levelAchievements}
        level={level}
      />
    )
  })

  return final
}

export default Achievements

Achievements.propTypes = {
  setValue: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  discipline: PropTypes.string.isRequired
}
