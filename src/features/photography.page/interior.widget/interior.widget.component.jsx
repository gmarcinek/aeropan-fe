import React from 'react'

export default class InteriorWidgetComponent extends React.Component {
  render() {
    return (
      <div className='article'>
        <h2>INTERIOR <span style={{ fontWeight: '200' }}>PHOTOGRAPHY</span></h2>
        <img width={'100%'} alt='bg' src={'/interior_04.jpg'} />
        <div className='break-1' />
        <button>Call Now</button>
        <button className='secondary'>Watch More</button>
        <div className='break-4' />
      </div>
    )
  }
}

