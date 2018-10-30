import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import Ministry from "./pages/Ministry"
import MinalocWebsite from "./pages/MinalocWebsite"
import LocalGov from "./pages/LocalGov"
import "./App.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/minaloc" component={Ministry} />
          <Route path="/minaloc-website" component={MinalocWebsite} />
          <Route path="/local-gov" component={LocalGov} />
        </div>
      </Router>
    )
  }
}

export default App
