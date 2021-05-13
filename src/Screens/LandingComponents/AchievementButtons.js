import React from 'react'
import PropTypes from 'prop-types'

function AchievementButtons (props) {
  const { setValue, register, achievement, discipline } = props

  const name = `achievement-${discipline}-${achievement.key}`

  const clearSelection = (e) => {
    e.preventDefault()
    setValue(e.target.name, null)
  }

  return (
    <div className='Landing=-achievement-buttons'>
      <button className='Form-button-radio-clear' name={name} onClick={clearSelection}>clear</button>
      <input type='radio' name={name} {...register(name)} value='1' className='start' />
      <input type='radio' name={name} {...register(name)} value='2' className='progress' />
      <input type='radio' name={name} {...register(name)} value='3' className='completed' />

    </div>
  )
}

export default AchievementButtons

AchievementButtons.propTypes = {
  setValue: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  achievement: PropTypes.object.isRequired,
  discipline: PropTypes.string.isRequired
}
