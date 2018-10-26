import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import NavBarTop from "./nav/navBarTop"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <NavBarTop />
        <NavBar />
      </div>
    )
  }
}

export default App
