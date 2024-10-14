import React from 'react'

const menus = ['Home', 'About Us'];

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
            <span className='navbar-brand'>Starlink Monitoring</span>
        </div>
    </nav>
  )
}

export default Header
