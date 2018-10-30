import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../App.css"

export default class MainContent extends Component {
  render() {
    return (
      <div className="container padding-bottom">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li
                style={{ fontSize: "16px", fontWeight: "bold" }}
                className="list-group-item"
              >
                Quick Links
              </li>
              <Link to="">
                <li className="list-group-item list-up">Visit Rwanda</li>{" "}
              </Link>
              <li className="list-group-item">Doing Business</li>
              <li className="list-group-item">Security and peace building</li>
              <li className="list-group-item">Infrastructure</li>
            </ul>
          </div>
          <div className="col-md-9 col-sm-3">
            <p className="rwanda-text">Rwanda Gov</p>
            <p className="rwanda-subtext">
              This is the official website of the government of Rwanda.
            </p>
            <div class="border-div_">
              <p className="content-text_ content_">NEWS HEADLINES</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-md-9 col-md-3">
            <div class="border-div">
              <p className="content-text_">NEWS CONTENT</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-md-9 col-md-3">
            <div class="border-div">
              <p className="content-text_">QUICK ANNOUNCEMENTS</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
