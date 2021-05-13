import React from 'react'

import StatusScore from './StatusScore'
import StatusDescription from './StatusDescription'

function Legend () {
  return (
    <div className='Card-achievements-legend'>
      <div className='Card-status-legend'>
        <StatusScore level={null} status='0' /><StatusDescription description='Not started' />
      </div>
      <div className='Card-status-legend'>
        <StatusScore level={null} status='1' /><StatusDescription description='Introduced' />
      </div>
      <div className='Card-status-legend'>
        <StatusScore level={null} status='2' /><StatusDescription description='In Progress' />
      </div>
      <div className='Card-status-legend'>
        <StatusScore level={null} status='3' /><StatusDescription description='Acquired' />
      </div>
    </div>
  )
}

export default Legend
