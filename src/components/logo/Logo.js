import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './android-brain-512.png'

const Logo = () => {
  return (
    <div style={{ paddingLeft: '15px' }}>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 60 }}
        style={{ height: 150, width: 150 }}
      >
        <div className='Tilt-inner'>
          <img
            src={brain}
            height='100px'
            width='100px'
            alt='Brain Logo'
            style={{ paddingTop: '25px' }}
          />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
