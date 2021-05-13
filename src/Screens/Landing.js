import React, { useEffect } from 'react'

import Header from './LandingComponents/Header'
import Form from './LandingComponents/Form'

import cleanup from '../helpers/cleanup'

function Landing () {
  useEffect(() => {
    cleanup()
  })

  return (
    <div className='Landing'>
      <Header />
      <Form />
    </div>
  )
}

export default Landing
