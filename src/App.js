import React from 'react'
import './App.css'
import Header from './Header'
import Homepage from './Homepage'
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
          <Route path="/">
            <Header />
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
