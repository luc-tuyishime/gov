import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../App.css"

export default class MainContentWeb extends Component {
  render() {
    return (
      <div className="container padding-bottom">
        <div className="row">
          <div className="col-md-10 col-sm-3">
            <p className="rwanda-text">
              About the Ministry of Local Government (MINALOC)
            </p>
            <p className="rwanda-subtext">
              The Ministry of Local Government ensures the coordination of good
              governance and high quality territorial administration programs
              that promote economic, social and political development throughout
              the nation.
            </p>
            <div className="border-div_">
              <p className="content-text_ content_">NEWS HEADLINES</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-10 col-md-3">
            <div className="border-div">
              <p className="content-text_">NEWS CONTENT</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-10 col-md-3">
            <div className="border-div">
              <p className="content-text_">QUICK ANNOUNCEMENTS</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
