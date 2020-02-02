import React from 'react'
import PhotoWidget from '../../components/photo.widget/photo.widget.component'

export default class PhotographyPage extends React.Component {
  render() {
    return (
      <div className='section' id='section-photography'>
        <div className='slide' id='section-photography-article'>
          <div className='fp-content t-white'>

            <h1 style={{ textAlign: 'center', marginBottom: '0', width: '100%' }}>AEROPAN <span style={{ fontWeight: '200' }}>PHOTOGRAPHY</span></h1>
            <div style={{ textAlign: 'center' }}>PRESENTS</div>

            <div className='break-8' />

            <div className='article-container'>
              <PhotoWidget titleBold='EXTERIOR' titleRegular='PHOTOGRAPHY' url='#exteriorPhotography' img='/exterior_01.png' />
              <PhotoWidget titleBold='INTERIOR' titleRegular='PHOTOGRAPHY' url='#interiorPhotography' img='/interior_01.jpg' />
              <PhotoWidget titleBold='AERIAL' titleRegular='PHOTOGRAPHY' url='#aerialPhotography' img='/aerial_01.png' />
              <PhotoWidget titleBold='ILUSTRATION' titleRegular='PHOTOGRAPHY' url='#realisations' img='/ilustration_01.jpg' />
            </div>

            <div className='break-8' />
          </div>
        </div>
      </div>
    )
  }
}

