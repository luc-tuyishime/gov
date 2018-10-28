import React, { Component } from "react"
import NavBar from "../components/nav/NavBar"
import Footer from "../components/Footer"
import NavBarTop from "../components/nav/navBarTop"
import Jumbotron from "../components/Jumbotron"
import MinalocContent from "../components/MinalocContent"
import "../App.css"

export default class Ministry extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <NavBarTop />
        <NavBar />
        <br />
        <MinalocContent />
        <Footer />
      </div>
    )
  }
}
