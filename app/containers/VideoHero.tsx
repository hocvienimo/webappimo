import React from 'react';

const VideoHero = () => {
  return (
    <section className="relative z-0 overflow-hidden">
      <video autoPlay loop muted className="object-cover">
      <source src="/images/home-video-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-[#333] bg-opacity-75"></div>
    </section>
  )
}

export default VideoHero