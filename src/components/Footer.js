import React, { Component } from "react"
import Logo2 from "../img/logo2.png"
import Instagram from "../img/instagram.png"
import Twitter from "../img/twitter.png"
import Linkdin from "../img/linkedin.png"
import Facebook from "../img/facebook.png"
import Img1 from "../img/footer-img.png"
import "../App.css"

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="neapolitan" />
        <div className="container-fluid w-100 bg-footer text-light py-3">
          <div className="picture">
            <div className="row">
              <div className="col-md-2">
                <img
                  className="gov-logo mx-auto d-block img-fluid"
                  src={Img1}
                  alt="gov"
                />
              </div>
              <div className="col-md-3 text-color-">
                {" "}
                <img className="gov-flag2 img-fluid" src={Logo2} alt="gov" />
                &nbsp;{" "}
                <span style={{ color: "#2C4466" }}>
                  Official site to Government Information
                </span>
                <br />
                <span style={{ color: "#2C4466" }} className="text__">
                  and services
                </span>
              </div>
              <div className="col-md-3 text-padding-bottom">
                <span className="textContact">Contact</span>
                <br />
                <span className="textContact">
                  Social Media &nbsp;
                  <img
                    className="img-fluid social-icon"
                    src={Instagram}
                    alt="gov"
                  />
                  &nbsp;&nbsp;
                  <img
                    className="img-fluid social-icon"
                    src={Linkdin}
                    alt="gov"
                  />
                  &nbsp; &nbsp;
                  <img
                    className="img-fluid social-icon"
                    src={Twitter}
                    alt="gov"
                  />
                  &nbsp;&nbsp;
                  <img
                    className="img-fluid social-icon"
                    src={Facebook}
                    alt="gov"
                  />
                </span>
                <br />
                <button
                  type="button"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  class="btn btn-primary btn-contact"
                >
                  Contact
                </button>
              </div>
              <div className="col-md-3 padding-other">
                <p className="other-link">Link 1</p>
                <p className="other-link">Link 2</p>
                <p className="other-link">Link 3</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Contact Form
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="text-label" HtmlFor="exampleInputEmail1">
                      Applicants
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Uncompleted Profile"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      className="text-label"
                      HtmlFor="exampleInputPassword1"
                    >
                      Subject
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="How can someone get full identify documents"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-label" HtmlFor="exampleInputEmail1">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label
                      className="text-label"
                      HtmlFor="exampleFormControlTextarea1"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Hello %USER_FULL_NAME%!"
                      rows="3"
                    />
                  </div>
                </form>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label
                        className="text-label"
                        HtmlFor="exampleFormControlSelect1"
                      >
                        Message type
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Inquiry, request, report</option>
                        <option>Inquiry,request,report</option>
                        <option>Inquiry,request,report</option>
                        <option>Inquiry,request,report</option>
                        <option>Inquiry,request,report</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        className="text-label"
                        HtmlFor="exampleFormControlSelect1"
                      >
                        Tap target
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Ministry of education, RDB</option>
                        <option>Ministry of Defense</option>
                        <option>Ministry of Health</option>
                        <option>MInistry of Agriculture</option>
                        <option>Ministry of Relation</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn  btn-primary"
                  data-dismiss="modal"
                  Name
                >
                  Send info
                </button>
                <button type="button" className="btn btn-danger">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
