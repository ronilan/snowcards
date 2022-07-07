import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'
import './data/brand.css'

import Landing from './Screens/Landing'
import Card from './Screens/Card'

function App () {
  // init storage
  const storage = window.localStorage.getItem('snow-cards')
  if (!storage) window.localStorage.setItem('snow-cards', JSON.stringify({}))

  // route
  return (
    <Router>
      <Routes>
        <Route path='/card' element={<Card />} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default App
