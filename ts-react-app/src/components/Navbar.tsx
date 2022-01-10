import React from 'react'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className='nav-wrapper  lime darken-2 px1'>
      <a href='/' className='brand-logo'>
        React + TypeScript
      </a>
      <ul className='right hide-on-med-and-down'>
        <li>
          <a href='/'>Main</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
      </ul>
    </div>
  </nav>
)