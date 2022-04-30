import React from 'react'
import styled from 'styled-components'

const Video = () => {
  return (
	<Section>
    <div className="background"></div>
    <div className="video">
    <iframe
      width="960"
      height="515"
      src="https://www.youtube.com/embed/2ffOXOfZzn0"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    </div>
  </Section>
  )
}

const Section = styled.section`
  background-color: #662d91aa;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  .video {
    z-index: 10;
  }
`

export default Video