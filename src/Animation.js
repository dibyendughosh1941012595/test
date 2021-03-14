import { Gradient } from '@material-ui/icons'
import React, { useState, useEffect, useRef } from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'
import './Animation.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 400.0,
          minWidth: 1900.0,
          scale: 1.0,
          scaleMobile: 1.0,
        }),
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div ref={myRef}>
      <h1 className="globe">
        "Only way to discover the limits of the possible is to go beyond them
        into the impossible"
      </h1>
      <a href="https://www.github.com">
        <GitHubIcon className="github" />
      </a>
      <a href="https://www.linkedin.com">
        <LinkedInIcon className="linkedin" />
      </a>
    </div>
  )
}

export default MyComponent
