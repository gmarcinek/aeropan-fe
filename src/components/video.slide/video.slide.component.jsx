import React from 'react'
import PropTypes from 'prop-types'

export default class VideoSlide extends React.Component {
  static defaultProps = {
    titleBold: '',
    titleRegular: '',
    src: '',
    index: 0
  }

  render() {
    const { src, index, titleBold, titleRegular } = this.props
    return (
      <div className='slide' id={`section-photography-slide-${index}`}>
        < video
          loop
          autoPlay
          data-autoplay
          src = {src}
          muted
          className='covered'
          />
        
        <div className='fp-content ap-galery__header t-white'>
          <h1 style={{ textAlign: 'center', marginBottom: '0' }}>{titleBold} <span style={{ fontWeight: '200' }}>{titleRegular}</span></h1>
        </div>
      </div>
    )
  }
}

VideoSlide.propTypes = {
  titleBold: PropTypes.string,
  titleRegular: PropTypes.string,
  src: PropTypes.string,
  index: PropTypes.number
}