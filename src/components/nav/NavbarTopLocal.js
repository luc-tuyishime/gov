import React, { Component } from "react"
import Logo from "../../img/logo.png"
import { Link } from "react-router-dom"
import Small from "../../img/smalk.png"
import Flag from "../../img/flag.png"
import "../../App.css"

export default class NavBarTopLocal extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="d-none d-sm-block bg-top-up">
            <div className="row">
              <div className="col-md-2 col-sm-6">
                <Link to="/">
                  <img className="gov-logo img-fluid" src={Logo} alt="gov" />
                </Link>
              </div>
              <div className="col-md-3 mx-auto d-block col-sm-6 hr-div-style">
                {" "}
                <hr style={{ borderLeft: "1px solid #124184" }} />
                <div className="text-govw">
                  <Link to="/minaloc-website">
                    Ministry
                    <br /> local Government
                  </Link>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="jdsf">
                  <img
                    className="gov-logo2 mx-auto d-block img-fluid"
                    src={Small}
                    alt="gov"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mx-auto d-block margin-form">
                <p style={{ color: "black" }} className="text-small">
                  {" "}
                  <img className="gov-flag img-fluid" src={Flag} alt="gov" />
                  &nbsp; local Government
                  <span style={{ color: "#0B84E3" }}>
                    &ensp;
                    <u>English</u>
                  </span>
                  <span style={{ color: "#0B84E3" }}>
                    &ensp;
                    <u>Kinyarwanda</u>
                  </span>
                </p>
                <div className="row">
                  <div className="col-md-10 gov-logo22">
                    <form className="row">
                      <div className="col-12 col-sm pr-sm-0">
                        <input
                          type="text"
                          name="search"
                          id="search"
                          placeholder="Search local Gov"
                          className="form-control width-form"
                        />
                      </div>
                      <div className="col-12 col-sm-auto pl-sm-0">
                        <input
                          type="button"
                          name="commit"
                          value="Go!"
                          className="btn btn-primary btn-block"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <p style={{ color: "#124184" }} className="hotline-color">
                  Hotline: +250 789 165
                </p>
              </div>
            </div>
          </div>

          {/* Mobile part */}
          <div className="d-block d-sm-none">
            <div className="container">
              <div className="row">
                <div className="col text-mobile-logo">
                  <img className="img-fluid" src={Logo} alt="gov" />
                </div>
                <div className="col text-mobile">
                  Government
                  <br /> of rwanda
                </div>
                <div className="col text-mobile-logo2">
                  <img
                    className="img-fluid logo-on-small"
                    src={Small}
                    alt="gov"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 margin-form">
                <p className="text-small">
                  {" "}
                  <img className="gov-flag img-fluid" src={Flag} alt="gov" />
                  &nbsp; local Government
                  <span>
                    &ensp;
                    <u>English</u>
                  </span>
                  <span>
                    &ensp;
                    <u>Kinyarwanda</u>
                  </span>
                </p>
                <form className="form-inline gov-logo22_">
                  <div className="form-group mb-2 ">
                    <input
                      type="password"
                      className="form-control width-form"
                      id="inputPassword2"
                      placeholder="Search local Gov"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mb-2">
                    Go!
                  </button>
                </form>
                <p style={{ color: "#124184" }} className="hotline-color">
                  Hotline: +250 789 165
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="neapolitan" />
      </div>
    )
  }
}
