import React, { Component } from "react"
import NavBar from "../components/nav/NavBar"
import Footer from "../components/Footer"
import NavBarTop from "../components/nav/navBarTop"
import Jumbotron from "../components/Jumbotron"
import MainContent from "../components/MainContent"
import "../App.css"

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBarTop />
        <NavBar />
        <Jumbotron />
        <MainContent />
        <Footer />
      </div>
    )
  }
}
