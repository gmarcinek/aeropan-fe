import React from 'react'
import VideoSlide from '../../components/video.slide/video.slide.component'

export default class FilmPageComponent extends React.Component {
  render() {
    const stadionVideo = 'https://serwer2140934.home.pl/NARODOWY_SH030_HD_v001_1.mp4'

    return (
      <div className='section'>
        <VideoSlide src={stadionVideo} />
      </div>
    )
  }
}
