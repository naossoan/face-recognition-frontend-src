import React from 'react'

//name and entries was passed from App.js to be used on the page.
const Rank = ({name, entries}) => {

    return (
      <div>
        <div className='white f4'>{`${name[0].toUpperCase() + name.substring(1)}, your current entry count is...`}</div>
        <div className='white f2'>{`${entries}`}</div>
      </div>
    )
  }


export default Rank
