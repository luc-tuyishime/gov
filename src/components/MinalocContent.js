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
              <li className="list-group-item active">Minaloc</li>
              <li className="list-group-item">Minicom</li>
              <li className="list-group-item">Minafet</li>
              <li className="list-group-item">Minispoc</li>
            </ul>
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
            <p className="rwanda-text">Go to our website for more details</p>
            <p className="rwanda-subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
              <br /> the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it.
            </p>
            <div class="alert alert-primary" role="alert">
              <Link to="/minaloc-website">
                <u>www.minaloc.gov.rw</u>
              </Link>
            </div>
            <div className="row">
              <div class="col-sm-6">
                <div class="card card-mini">
                  <div class="card-body">
                    <h3 class="card-title">Help us help you!</h3>
                    <p class="card-text">Was this page helpful?</p>
                    <div className="row">
                      <div class="col-sm-6">
                        <p style={{ fontSize: "12px" }}>
                          <img className="img-fluid" src={Yes} alt="gov" />
                          &nbsp;Yes, sure it was
                        </p>
                      </div>
                      <div class="col-sm-6">
                        <p style={{ fontSize: "12px" }}>
                          <img className="img-fluid" src={No} alt="gov" />
                          &nbsp;No, Didn't get it
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    )
  }
}
