import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../App.css"

export default class ContentLocal extends Component {
  render() {
    return (
      <div className="container padding-bottom">
        <div className="row">
          <div className="col-md-12 col-sm-3">
            <p className="rwanda-text">Local Government</p>
            <p className="rwanda-subtext">
              Local Administrative entities of Rwanda
            </p>
            <div className="border-div_local">
              <p className="content-text_ content_">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          style={{ color: "black" }}
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
                        <Link to="/local-gov">
                          <p>Gasabo</p>
                        </Link>
                        <Link to="/local-gov">
                          <p>Kicukiro</p>
                        </Link>
                        <Link to="/local-gov">
                          <p>Nyarugenge</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="">
                        <button
                          style={{ color: "black" }}
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
                        <Link to="/local-gov">
                          <p>Bugesera</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Gatsibo</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Kayonza</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Kirehe</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Ngoma</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Nyagatare</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Rwagamana</p>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          style={{ color: "black" }}
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
                        <Link to="/local-gov">
                          <p>Burera</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Gicumbi</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Gakenke</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Musanze</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Rurindo</p>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <button
                          style={{ color: "black" }}
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
                        <Link to="/local-gov">
                          <p>Karongi</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Ngorero</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Nyabihu</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Nyamasheke</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Rubavu</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Rutsiro</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Rusizi</p>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <h5 className="mb-0">
                        <button
                          style={{ color: "black" }}
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
                        <Link to="/local-gov">
                          <p>Gisagara</p>{" "}
                        </Link>
                        <Link to="/local-gov">
                          <p>Huye</p>
                        </Link>
                        <Link to="/local-gov">
                          <p>Kamonyi</p>
                        </Link>
                        <Link to="/local-gov">
                          <p>Muhanga</p>
                        </Link>
                        <Link to="/local-gov">
                          <p>Nyamagabe</p>
                        </Link>
                        <Link to="/local-gov">
                          <p>Nyanza</p>
                        </Link>
                        <Link to="/local-gov">
                          <p>Nyaruguru</p>
                        </Link>
                        <Link to="/local-gov">
                          <p>Ruhango</p>
                        </Link>
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
          <div className="col-md-12 col-md-3">
            <div className="border-div">
              <p className="content-text_">NEWS CONTENT</p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12 col-md-3">
            <div className="border-div">
              <p className="content-text_">QUICK ANNOUNCEMENTS</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
