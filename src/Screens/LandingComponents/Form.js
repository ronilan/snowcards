import React from 'react'

import { useForm } from 'react-hook-form'

import Achievements from './Achievements'
import GenerateButton from './GenerateButton'

function Form () {
  // "smart" reset behavior.
  const disciplineChange = (e) => {
    reset({
      instructor: current.instructor,
      discipline: e.target.value
    })
  }

  const resetClick = (e) => {
    e.preventDefault()
    reset({
      instructor: current.instructor,
      discipline: current.discipline,
      program: current.program
    })
  }

  const { register, unregister, setValue, reset, watch } = useForm()

  // watch contains all form data
  // on initial load it is an empty object
  const current = watch()

  // in case current is empty this is initial load
  // look at storage for cached data.
  // set form and current.

  // if current not empty, form is actively used
  // set storage accordingly
  if (!Object.keys(current).length) {
    Object.entries(JSON.parse(window.localStorage.getItem('snow-cards')))
      .filter(([k, v]) => v)
      .forEach(item => {
        setValue(item[0], item[1])
        current[item[0]] = item[1]
      })
  } else {
    window.localStorage.setItem('snow-cards', JSON.stringify(current))
  }

  // unregister achievement for discipline when there was a discipline change
  Object.keys(current)
    .filter(item => item.indexOf('achievement') !== -1 && item.indexOf(current.discipline) === -1)
    .forEach(item => unregister(item))

  // generate button will require minimal fields
  const minimal = !!(current.instructor && current.discipline && current.guest && current.level)

  return (
    <div className='Form'>
      <form>
        <div>
          <label>Instructor Name*:</label>
          <input name='instructor' {...register('instructor')} /><br />
        </div>
        <hr />
        <div>
          <label>Discipline*:</label>
          <input type='radio' name='discipline' {...register('discipline')} onChange={disciplineChange} value='snowboard' className='skiButton' />Snowboard
          <input type='radio' name='discipline' {...register('discipline')} onChange={disciplineChange} value='ski' className='snowboardButton' />Ski
        </div>
        <div>
          <label>Program:</label>
          <select {...register('program')}>
            <option value='' />
            <option value='Kids Camp'>Kids Camp</option>
            <option value='Youth Camp'>Youth Camp</option>
            <option value='Adult Clinic'>Adult Clinic</option>
            <option value='Private Lessons'>Private Lessons</option>
          </select>
          <br />
          <button onClick={resetClick}>Reset</button>
        </div>
        <hr />
        <div>
          <label>Guest Name*:</label>
          <input name='guest' {...register('guest')} /><br />
        </div>
        <div>
          <label>Current Level (after lesson)*:</label>
          <select {...register('level')}>
            <option value='' />
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
          </select>
        </div>
        <hr />
        <div>
          <Achievements setValue={setValue} register={register} discipline={current.discipline || ''} />
        </div>
        <hr />
        <div>
          <label>Comments:</label><br />
          <textarea {...register('comments')} maxLength='500' />
        </div>
        <div>
          <label>Date:</label>
          <input type='date' {...register('date')} />
        </div>
      </form>
      <br />
      <GenerateButton show={minimal} />
    </div>
  )
}

export default Form
