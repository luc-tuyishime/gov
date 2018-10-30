import React, { Component } from "react"
import NavBar from "../components/nav/NavBar"
import Footer from "../components/Footer"
import NavBarTopLocal from "../components/nav/NavbarTopLocal"
import NavBar2 from "../components/nav/NavbarWebsite2"
import JumboLocal from "../components/JumboLocal"
import NavBarTopWebsite from "../components/nav/NavBarWebsite"
import MainContent from "../components/MainContent"
import ContentLocal from "../components/ContentLocal"
import "../App.css"

export default class LocalGov extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <NavBarTopLocal />
        <NavBar2 />
        <JumboLocal />
        <ContentLocal />
        <Footer />
      </div>
    )
  }
}
