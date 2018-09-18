import React, { Component } from "react";
import { Link } from 'react-router-dom';

// Images
import meditation from "../../assets/images/meditation.png";
import stepper from "../../assets/images/stepper.png";
import trainers from "../../assets/images/trainers.png";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="container">
          <div className="head">
            <h1>Explore our services</h1>
          </div>
          <div className="rows">
            <div className="row">
              <div className="image">
                <img src={meditation} alt="meditation" />
              </div>
              <div className="content">
                <h1 style={{ textAlign: "center" }}>YOGA</h1>
                <p style={{ textAlign: "center", lineHeight: 1.8 }}>
                  Amet consectetur adipisicing elit. Quae iste ab dolores
                  excepturi fuga placeat aliquam quibusdam deleniti vero
                  cupiditate.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="image">
                <img src={stepper} alt="stepper" />
              </div>
              <div className="content">
                <h1 style={{ textAlign: "center" }}>Exercise</h1>
                <p style={{ textAlign: "center", lineHeight: 1.8 }}>
                  Amet consectetur adipisicing elit. Quae iste ab dolores
                  excepturi fuga placeat aliquam quibusdam deleniti vero
                  cupiditate.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="image">
                <img src={trainers} alt="trainers" height="100" width="100" />
              </div>
              <div className="content">
                <h1 style={{ textAlign: "center" }}>Training Programme</h1>
                <p style={{ textAlign: "center", lineHeight: 1.8 }}>
                  Amet consectetur adipisicing elit. Quae iste ab dolores
                  excepturi fuga placeat aliquam quibusdam deleniti vero
                  cupiditate.
                </p>
              </div>
            </div>
          </div>
          <div className="button">
            <Link to="#">Get in touch</Link>
          </div>
        </div>
      </div>
    );
  }
}


export default Services;