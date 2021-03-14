import React from 'react'
import './Images.css'
import machineLearning from './machineLearning.jpg'
import deepLearning from './deepLearning.jpg'
import artificialIntelligence from './artificialIntelligence.jpg'
import computerVision from './computerVision.jpg'
import dataViz from './dataViz.jpg'
import nlp from './nlp.jpg'
import computerVision2 from './computerVision2.jpg'
import neuralNetwork from './neuralNetwork.jpg'
function Images() {
  return (
    <div className="slide">
      <h1>
        <u>OUR SPECIALISATIONS</u>
      </h1>
      <div className="div1">
        <img src={machineLearning} className="images" />
        <img src={deepLearning} className="images" />
        <img src={artificialIntelligence} className="images" />
        <img src={computerVision} className="images" />
        <img src={dataViz} className="images" />
        <img src={nlp} className="images" />
        <img src={computerVision2} className="images" />
        <img src={neuralNetwork} className="images" />
      </div>
      <div className="div2">
        <img src={machineLearning} className="images" />
        <img src={deepLearning} className="images" />
        <img src={artificialIntelligence} className="images" />
        <img src={computerVision} className="images" />
        <img src={dataViz} className="images" />
        <img src={nlp} className="images" />
        <img src={computerVision2} className="images" />
        <img src={neuralNetwork} className="images" />
      </div>
    </div>
  )
}

export default Images
