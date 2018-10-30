import React, { Component } from "react"
import { Link } from "react-router-dom"
import Yes from "../img/yes.png"
import No from "../img/no.png"
import "../App.css"

export default class MinalocContent extends Component {
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
            <br />
            <span className="rwanda-text-left">
              Go to our website for more details
            </span>
            <div class="alert alert-primary" role="alert">
              <Link to="/minaloc-website">
                <u>www.minaloc.gov.rw</u>
              </Link>
            </div>
          </div>
          <div className="col-md-9 col-sm-3">
            <p className="rwanda-text">
              The Ministry of Local Government (MINALOC)
            </p>
            <p className="rwanda-subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it.
            </p>
            <div class="border-div_">
              <p className="content-text_ content_">CONTENT</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-md-9 col-md-3">
            <div class="border-div">
              <p className="content-text_">OTHER CONTENT</p>
            </div>
            <br />

            <p className="rwanda-subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
              <br /> the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it.
            </p>
          </div>
        </div>
        <br />
      </div>
    )
  }
}
