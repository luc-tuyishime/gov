import React, { Component } from "react"
import NavBarMinaloc from "../components/nav/NavBarMinaloc"
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
        <NavBarMinaloc />
        <br />
        <MinalocContent />
        <Footer />
      </div>
    )
  }
}
