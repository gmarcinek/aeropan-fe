import React from 'react'
import PropTypes from 'prop-types'

export default class PhotoSlide extends React.Component {
  static defaultProps = {
    titleBold: '',
    titleRegular: '',
    img: '',
    index: ''
  }

  render() {
    const { img, index, titleBold, titleRegular } = this.props
    return (
      <div className='slide' id={`section-photography-slide-${index}`}>
        <div className='fp-bg'>
          <img className='covered' alt='bg' src={img} />
        </div>
        <div className='fp-content ap-galery__header t-white'>
          <h1 style={{ textAlign: 'center', marginBottom: '0' }}>{titleBold} <span style={{ fontWeight: '200' }}>{titleRegular}</span></h1>
        </div>
      </div>
    )
  }
}

PhotoSlide.propTypes = {
  titleBold: PropTypes.string,
  titleRegular: PropTypes.string,
  img: PropTypes.string,
  index: PropTypes.string
}

