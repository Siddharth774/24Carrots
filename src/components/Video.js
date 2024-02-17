import React from 'react'
import video from '../assets/video.mp4'
const Video = () => {
  return (
    <div>
    <iframe className="w-full aspect-video " allow="autoplay" autoplay muted loop src={video}>hi</iframe>
    </div>
  )
}

export default Video