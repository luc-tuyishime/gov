import React, { Component } from "react"
import "../App.css"

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="container">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="jumbotron jumbo01">
                <div className="col-sm-5">
                  <div className="card card-home">
                    <div className="card-body">
                      <h4 className="card-title">Welcome to Rwanda</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button type="button" className="btn btn-primary">
                        Visit Rwanda
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="jumbotron jumbo1">
                <div className="col-sm-5">
                  <div className="card card-home">
                    <div className="card-body">
                      <h4 className="card-title">Welcome to Rwanda</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button type="button" class="btn btn-primary">
                        Visit Rwanda
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="jumbotron jumbo03">
                <div className="col-sm-5">
                  <div className="card card-home">
                    <div className="card-body">
                      <h4 className="card-title">Welcome to Rwanda</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button type="button" className="btn btn-primary">
                        Visit Rwanda
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}
