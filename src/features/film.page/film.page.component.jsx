import React from 'react'
import VideoSlide from '../../components/video.slide/video.slide.component'

export default class FilmPageComponent extends React.Component {
  render() {
    const stadionVideo = 'https://serwer2083856.home.pl/NARODOWY_MAIN_HD_v001.mp4'

    return (
      <div className='section'>
        <VideoSlide src={stadionVideo} titleBold='AEROPAN' titleRegular='FILMS' />
      </div>
    )
  }
}
