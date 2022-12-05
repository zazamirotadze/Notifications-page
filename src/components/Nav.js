import React from 'react'

const Nav = ({readAll, nofinicationNum}) => {
  
  return (
    <div className='nav'>
      <div className='nav__part-1' >
        <h2>Notifications</h2>
        <div >{nofinicationNum}</div>
      </div>
      <div className='nav__part-2' onClick={readAll}>
        <div>Mark all as read</div>
      </div>
    </div>
  )
}

export default Nav