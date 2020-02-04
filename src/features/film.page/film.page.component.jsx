import React from 'react'
import VideoSlide from '../../components/video.slide/video.slide.component'

export default class FilmPageComponent extends React.Component {
  render() {
    const mobileVideo = 'https://serwer2083856.home.pl/DJI_0225_2.mp4'
    const stadionVideo = 'https://serwer2083856.home.pl/NARODOWY_MAIN_HD_v001.mp4'
    const peruVideo = 'https://serwer2083856.home.pl/AEROPAN_MAIN_001.mp4'

    return (
      <div className='section'>
        <VideoSlide src={peruVideo} titleBold='AEROPAN' titleRegular='ANDES'/>
        <VideoSlide src={stadionVideo} titleBold='AEROPAN' titleRegular='STADIUM'/>
        <VideoSlide src={mobileVideo} titleBold='AEROPAN' titleRegular='FILLIGHTS'/>
      </div>
    )
  }
}
