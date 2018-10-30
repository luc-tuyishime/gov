import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../App.css"

export default class ContentLocal extends Component {
  render() {
    return (
      <div className="container padding-bottom">
        <div className="row">
          <div className="col-md-10 col-sm-3">
            <p className="rwanda-text">Local Government</p>
            <p className="rwanda-subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it.
            </p>
            <div className="col-md-5">
              <ul className="list-group">
                <li className="list-group-item">Provinces links</li>
                <li className="list-group-item">District links</li>
              </ul>
              <br />
              <span className="rwanda-text-left">
                Go to our website for more details
              </span>
              <div className="alert alert-primary" role="alert">
                <Link to="/minaloc-website">
                  <u>www.local-gov.gov.rw</u>
                </Link>
              </div>
            </div>
            <br />
            <div className="border-div_local">
              <p className="content-text_ content_">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          City of Kigali
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      classNameName="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div
                        style={{ fontSize: "14px" }}
                        classNameName="card-body"
                      >
                        <p>Gasabo</p>
                        <p>Kicukiro</p>
                        <p>Nyarugenge</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Eastern Province
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div style={{ fontSize: "14px" }} className="card-body">
                        <p>Bugesera</p>
                        <p>Gatsibo</p>
                        <p>Kayonza</p>
                        <p>Kirehe</p>
                        <p>Ngoma</p>
                        <p>Nyagatare</p>
                        <p>Rwagamana</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Northern Province
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div style={{ fontSize: "14px" }} className="card-body">
                        <p>Burera</p>
                        <p>Gicumbi</p>
                        <p>Gakenke</p>
                        <p>Musanze</p>
                        <p>Rurindo</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Western Province
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <div style={{ fontSize: "14px" }} class="card-body">
                        <p>Karongi</p>
                        <p>Ngorero</p>
                        <p>Nyabihu</p>
                        <p>Nyamasheke</p>
                        <p>Rubavu</p>
                        <p>Rutsiro</p>
                        <p>Rusizi</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Southern Province
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordionExample"
                    >
                      <div style={{ fontSize: "14px" }} className="card-body">
                        <p>Gisagara</p>
                        <p>Huye</p>
                        <p>Kamonyi</p>
                        <p>Muhanga</p>
                        <p>Nyamagabe</p>
                        <p>Nyanza</p>
                        <p>Nyaruguru</p>
                        <p>Ruhango</p>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
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
