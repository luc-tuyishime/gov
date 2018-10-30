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
                        <Link to="">
                          <p>Gasabo</p>
                        </Link>
                        <Link to="">
                          <p>Kicukiro</p>
                        </Link>
                        <Link to="">
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
                        <Link to="">
                          <p>Bugesera</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Gatsibo</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Kayonza</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Kirehe</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Ngoma</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Nyagatare</p>{" "}
                        </Link>
                        <Link to="">
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
                        <Link to="">
                          <p>Burera</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Gicumbi</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Gakenke</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Musanze</p>{" "}
                        </Link>
                        <Link to="">
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
                        <Link to="">
                          <p>Karongi</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Ngorero</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Nyabihu</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Nyamasheke</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Rubavu</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Rutsiro</p>{" "}
                        </Link>
                        <Link to="">
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
                        <Link to="">
                          <p>Gisagara</p>{" "}
                        </Link>
                        <Link to="">
                          <p>Huye</p>
                        </Link>
                        <Link to="">
                          <p>Kamonyi</p>
                        </Link>
                        <Link to="">
                          <p>Muhanga</p>
                        </Link>
                        <Link to="">
                          <p>Nyamagabe</p>
                        </Link>
                        <Link to="">
                          <p>Nyanza</p>
                        </Link>
                        <Link to="">
                          <p>Nyaruguru</p>
                        </Link>
                        <Link to="">
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
