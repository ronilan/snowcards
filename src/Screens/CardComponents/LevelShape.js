import React from 'react'
import PropTypes from 'prop-types'

import LevelGreenCircle from './LevelGreenCircle'
import LevelBlueSquare from './LevelBlueSquare'
import LevelBlackDiamond from './LevelBlackDiamond'
import LevelDoubleBlackDiamond from './LevelDoubleBlackDiamond'

function LevelShape (props) {
  const { level } = props

  if (level === '6') return <LevelDoubleBlackDiamond />
  if (level === '5') return <LevelBlackDiamond />
  if (level === '4') return <LevelBlueSquare />
  if (level === '3') return <LevelGreenCircle />
  if (level === '2') return <LevelGreenCircle />
  if (level === '1') return <LevelGreenCircle />
  return ''
}

export default LevelShape

LevelShape.propTypes = {
  level: PropTypes.string.isRequired
}
