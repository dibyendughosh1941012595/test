import React from 'react'
import './Body.css'
import LocationOnIcon from '@material-ui/icons/LocationOn'

function Body() {
  return (
    <div>
      <div className="body">
        <h1>
          <u>ABOUT OUR COMPANY</u>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          lobortis tellus eu lectus posuere, id imperdiet ante elementum. Fusce
          imperdiet quis sem quis placerat. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Nullam varius volutpat diam in vestibulum. Sed dignissim faucibus
          laoreet. Suspendisse potenti. Suspendisse convallis dolor vitae
          sodales placerat. Integer vitae ultricies felis, sit amet pellentesque
          felis. Nullam quam lorem, molestie quis lorem placerat, finibus
          faucibus enim. Mauris vitae orci ullamcorper, pulvinar lacus eu,
          maximus lectus. Etiam convallis fermentum volutpat. Phasellus ornare
          sit amet dui non viverra.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse lobortis tellus eu lectus posuere, id
          imperdiet ante elementum. Fusce imperdiet quis sem quis placerat.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nullam varius volutpat diam in vestibulum.
        </p>
      </div>
      <div className="body">
        <h1>
          <u>COMPLETED PROJECTS</u>
        </h1>
        <div className="project">
          <LocationOnIcon className="icon" />
          <p>sq9djwe9djew was completed on this date.</p>
        </div>
        <div className="project">
          <LocationOnIcon className="icon" />
          <p>sq9djwe9djew was completed on this date.</p>
        </div>
        <div className="project">
          <LocationOnIcon className="icon" />
          <p>sq9djwe9djew was completed on this date.</p>
        </div>
        <div className="project">
          <LocationOnIcon className="icon" />
          <p>sq9djwe9djew was completed on this date.</p>
        </div>
      </div>
    </div>
  )
}

export default Body
