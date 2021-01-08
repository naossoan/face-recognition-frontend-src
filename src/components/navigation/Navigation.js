import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '10px',
        }}
      >
        <p
          className='f3 link dim black underline pa3 pointer'
          onClick={() => onRouteChange('signout')} //need to add the arrow function so that it only gets called when onClick happens
        >
          Sign Out
        </p>
      </nav>
    )
  } else {
    return (
      <nav
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '10px',
        }}
      >
        <p
          className='f3 link dim black underline pa3 pointer'
          onClick={() => onRouteChange('signin')} //need to add the arrow function so that it only gets called when onClick happens
        >
          Sign In
        </p>
        <p
          className='f3 link dim black underline pa3 pointer'
          onClick={() => onRouteChange('register')} //need to add the arrow function so that it only gets called when onClick happens
        >
          Register
        </p>
      </nav>
    )
  }
}

export default Navigation
