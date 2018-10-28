import React, { Component } from "react"
import NavBar from "../components/nav/NavBar"
import Footer from "../components/Footer"
import NavBarTop from "../components/nav/navBarTop"
import NavBar2 from "../components/nav/NavbarWebsite2"
import JumbotronWebsite from "../components/JumbotronWebsite"
import NavBarTopWebsite from "../components/nav/NavBarWebsite"
import MainContent from "../components/MainContent"
import MainContentWeb from "../components/ContentWebsite"
import "../App.css"

export default class MinalocWebsite extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <NavBarTopWebsite />
        <NavBar2 />
        <JumbotronWebsite />
        <MainContentWeb />
        <Footer />
      </div>
    )
  }
}
