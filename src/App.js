import React from 'react'
import './App.css'
import Header from './Header'
import Animation from './Animation'
import Body from './Body'
import Footer from './Footer'
import Images from './Images'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/about">
            <h1>AboutUs</h1>
          </Route>
          <Route path="/projects">
            <h1>Projects</h1>
          </Route>
          <Route path="/OpenVegaLib">
            <h1>OpenVegaLib</h1>
          </Route>
          <Route path="/" exact>
            <Header />
            <Animation />
            <Body />
            <Images />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
