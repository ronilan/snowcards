import React, { useEffect } from 'react'

import Header from './CardComponents/Header'
import Guest from './CardComponents/Guest'
import Statuses from './CardComponents/Statuses'

import Footer from './CardComponents/Footer'

import capture from '../helpers/capture'

function Card () {
  useEffect(() => {
    // note:even though capture waits for images to load before trying to capture,
    // the capture process itself tends to fail initial (non cached) image loading on iOS
    capture({ width: 1080, pixelRatio: 1 })
  }, []) // empty array means 'run once'

  const current = JSON.parse(window.localStorage.getItem('snow-cards'))
  const { instructor, discipline, level, program, guest, comments, date } = current

  const statuses = Object.entries(current).filter(([k, v]) => {
    return k.indexOf('achievement') !== -1 && v
  }).map(([k, v]) => { return { [k]: v } })

  return (

    <div id='Card' className='Card'>
      <Header program={program || ''} level={level || ''} discipline={discipline || ''} />
      <main className='Card-main'>
        <Guest text={guest} level={level || ''} comments={comments || ''} instructor={instructor} date={date} />
        <Statuses statuses={statuses} discipline={discipline || ''} />
      </main>
      <Footer />
    </div>

  )
}

export default Card
