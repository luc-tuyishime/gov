import React, { Component } from "react"

import { Link } from "react-router-dom"
import "../../App.css"

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div />
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link to="/">Home</Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-center text-center"
                id="navbarNavDropdown"
              >
                <div className=" d-none d-sm-block">
                  <ul className="navbar-nav">
                    <li class="dropdown">
                      <Link
                        to=""
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Government <b class="caret" />
                      </Link>
                      <ul class="dropdown-menu center-drop-menu multi-column columns-3_">
                        <div class="row">
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li>
                                <u>
                                  <Link to="/">OFFICE OF THE PRESIDENT</Link>
                                </u>
                              </li>
                              <li>
                                <Link to="/minaloc">
                                  The Ministry of Local Government (MINALOC)
                                </Link>
                              </li>
                              <li>
                                <Link to="/local-gov">Local Government</Link>
                              </li>
                              <li style={{ color: "red" }}>
                                <Link to="#">
                                  The Ministry of infrastructure (MININFRA)
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry of Trade and Industry
                                </Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="#">
                                  The Ministry of Agriculture and Animal
                                  Ressources (MINAGRI)
                                </Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="#">
                                  The Ministry of Finance and Economic Planning
                                  (MINECOFIN)
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry in charge of Emergency Management
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry of Education (MINEDUC)
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry of Health(MINISANTE)
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry of Defense (MINADEF)
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li>
                                <u>
                                  <Link to="">PRIME MINISTER OFFICE</Link>
                                </u>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry of Justice (MINIJUST)
                                </Link>
                              </li>

                              <li>
                                <Link to="#">
                                  The Ministry of Youth (MINIYOUTH)
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry of Gender and family Pormotion
                                  (MIGEPROF)
                                </Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="#">
                                  The Ministry of ICT and Innovation
                                </Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="#">
                                  The Ministry of Sport and Cultural (MINISPOC)
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry of Public Service and Labour
                                  (MIFOTRA)
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry of Foreign Affairs and
                                  International Cooperation
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry of Environment (Mo)
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Rwanda Development Board (RDB)
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  The Ministry of Defense (MINADEF)
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <Link
                        to=""
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Programs <b class="caret" />
                      </Link>
                      <ul class="dropdown-menu center-drop-menu multi-column columns-3">
                        <div class="row">
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li>
                                <Link to="#">Good governance</Link>
                              </li>
                              <li>
                                <Link to="#">Decentralization</Link>
                              </li>
                              <li>
                                <Link to="#">Community Development</Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li class="divider" />
                              <li>
                                <Link to="#">Local finance</Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="#">Social protection</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </li>

                    <li class="dropdown">
                      <Link
                        to="#"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Documents <b class="caret" />
                      </Link>
                      <ul class="dropdown-menu center-drop-menu multi-column columns-3">
                        <div class="row">
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li>
                                <Link to="">Constitution</Link>
                              </li>
                              <li>
                                <Link to="">Citizen documents</Link>
                              </li>
                              <li>
                                <Link to="">Business documents</Link>
                              </li>
                              <li class="divider" />
                            </ul>
                          </div>
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li>
                                <Link to="#">Lorem ipsum</Link>
                              </li>
                              <li>
                                <Link to="#">Lorem ipsum</Link>
                              </li>
                              <li>
                                <Link to="#">Lorem ipsum</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <Link
                        to=""
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Information <b class="caret" />
                      </Link>
                      <ul class="dropdown-menu center-drop-menu multi-column columns-3">
                        <div class="row">
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li>
                                <Link to="#">Visit Rwanda</Link>
                              </li>
                              <li>
                                <Link to="#">Doing Business in Rwanda</Link>
                              </li>
                              <li>
                                <Link to="#">Become a Citizen</Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="#">Technologie and Innovation</Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="#">Education</Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li>
                                <Link to="#">Land and Nature resources</Link>
                              </li>
                              <li>
                                <Link to="#">Health</Link>
                              </li>
                              <li>
                                <Link to="#">Infrastructure</Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="#">Security</Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="#">Ioc</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Mobile part */}
                <div className="d-block d-sm-none">
                  <ul className="navbar-nav">
                    <li class="dropdown">
                      <Link
                        to=""
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Programs <b class="caret" />
                      </Link>
                      <ul class="dropdown-menu multi-column columns-3">
                        <div class="row">
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li>
                                <Link to="#">Good governance</Link>
                              </li>
                              <li>
                                <Link to="#">Decentralization</Link>
                              </li>
                              <li>
                                <Link to="#">Community Development</Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li class="divider" />
                              <li>
                                <Link to="#">Local finance</Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="#">Social protection</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <Link
                        to=""
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ministries <b class="caret" />
                      </Link>
                      <ul class="dropdown-menu multi-column columns-3">
                        <div class="row">
                          <div class="col-sm-12">
                            <ul class="multi-column-dropdown">
                              <li>
                                <Link to="">
                                  The Ministry of Local Government (MINALOC)
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  The Ministry of infrastructure (MININFRA)
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  The Ministry of Trade and Industry
                                </Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="">
                                  The Ministry of Agriculture and Animal
                                  Ressources (MINAGRI)
                                </Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="">
                                  The Ministry of Finance and Economic Planning
                                  (MINECOFIN)
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  The Ministry in charge of Emergency Management
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  The Ministry of Education (MINEDUC)
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  The Ministry of Health(MINISANTE)
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  The Ministry of Defense (MINADEF)
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-sm-6">
                            <ul class="multi-column-dropdown">
                              <li>
                                <Link to="">
                                  The Ministry of Justice (MINIJUST)
                                </Link>
                              </li>

                              <li>
                                <Link to="">
                                  The Ministry of Youth (MINIYOUTH)
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  The Ministry of Gender and family Pormotion
                                  (MIGEPROF)
                                </Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="">
                                  The Ministry of ICT and Innovation
                                </Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="">
                                  The Ministry of Sport and Cultural (MINISPOC)
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  The Ministry of Public Service and Labour
                                  (MIFOTRA)
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  The Ministry of Foreign Affairs and
                                  International Cooperation
                                </Link>
                              </li>
                              <li>
                                <Link to="">
                                  The Ministry of Environment (Mo)
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Documents <b class="caret" />
                      </a>
                      <ul class="dropdown-menu multi-column columns-3">
                        <div class="row">
                          <div class="col-sm-4">
                            <ul class="multi-column-dropdown">
                              <li>
                                <Link to="">Constitution</Link>
                              </li>
                              <li>
                                <Link to="">Citizen documents</Link>
                              </li>
                              <li>
                                <Link to="">Business documents</Link>
                              </li>
                              <li class="divider" />
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Our outlets <b class="caret" />
                      </a>
                      <ul class="dropdown-menu multi-column columns-3">
                        <div class="row">
                          <div class="col-sm-4">
                            <ul class="multi-column-dropdown">
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li class="divider" />
                              <li>
                                <Link to="">Action</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li className="divider" />
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li className="divider" />
                              <li>
                                <Link to="">Action</Link>
                              </li>
                            </ul>
                          </div>
                          Name
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li className="divider" />
                              <li>
                                <Link to="">Action</Link>
                              </li>
                              <li className="divider" />
                              <li>
                                <Link to="">Action</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
