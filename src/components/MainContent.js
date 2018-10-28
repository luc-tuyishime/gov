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
              <Link to="/minaloc">
                <li className="list-group-item list-up">Minaloc</li>{" "}
              </Link>

              <li className="list-group-item">Minicom</li>

              <li className="list-group-item">Minafet</li>
              <li className="list-group-item">Minispoc</li>
            </ul>
          </div>
          <div className="col-md-9 col-sm-3">
            <p className="rwanda-text">Rwanda Gov</p>
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
              <p className="content-text_">ANNOUNCEMENT</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-md-9 col-md-3">
            <div class="border-div">
              <p className="content-text_">ANNOUNCEMENT</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
