import React from 'react'
import PropTypes from 'prop-types';
import './photo.widget.css';

export default class PhotoWidget extends React.Component {
  static defaultProps = {
    titleBold: '',
    titleRegular: '',
    url: '',
    img: '',
  }

  render() {
    const {
      titleBold,
      titleRegular,
      url,
      img
    } = this.props

    return (
      <div className='photo-widget article'>
        <h2>{titleBold} <span style={{ fontWeight: '200' }}>{titleRegular}</span></h2>
        <a href={url}><img width={'100%'} alt='bg' src={img} /></a>
        <div className='break-1' />
        <button>Call Now</button>
        <a href={url}><button className='secondary'>Watch More</button></a>
        <div className='break-4' />
      </div>
    )
  }
}

PhotoWidget.propTypes = {
  titleBold: PropTypes.string,
  titleRegular: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
};