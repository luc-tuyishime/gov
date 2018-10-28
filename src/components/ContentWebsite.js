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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it.
            </p>
            <div className="border-div_">
              <p className="content-text_ content_">CONTENT</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-10 col-md-3">
            <div className="border-div">
              <p className="content-text_">ANNOUNCEMENT</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-10 col-md-3">
            <div className="border-div">
              <p className="content-text_">ANNOUNCEMENT</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
