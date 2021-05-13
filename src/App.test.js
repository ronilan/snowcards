/* eslint-disable */

import { render, screen } from '@testing-library/react'

import App from './App'
import Landing from './Screens/Landing'
import Form from './Screens/LandingComponents/Form'
import Card from './Screens/Card'

test('renders App', () => {
  render(<App />)
  const el = screen.getByText(/ACHIEVEMENT CARD GENERATOR/i)
  expect(el).toBeInTheDocument()
})

test('renders Landing', () => {
  render(<Landing />)
  const el = screen.getByText(/ACHIEVEMENT CARD GENERATOR/i)
  expect(el).toBeInTheDocument()
})

test('renders Form', () => {
  render(<Form />)
  const el = screen.getByText(/Instructor Name/i)
  expect(el).toBeInTheDocument()
})

// TODO: maybe...
