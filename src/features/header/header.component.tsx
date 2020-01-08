import React from 'react'
import './header.css'

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div id='header' className='header'>
        <div className='header-logo'>AEROPAN</div>
      </div>
    )
  }
}