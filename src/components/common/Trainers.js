import React, { Component } from "react";
import { Link } from "react-router-dom";
import trainer1 from "../../assets/images/Trainer-1.png";
import trainer2 from "../../assets/images/Trainer-2.png";
import trainer3 from "../../assets/images/Trainer-3.png";

class Trainers extends Component {
  render() {
    return (
      <div
        className="trainers"
        style={{
          background: this.props.background || "#fafafa"
        }}
      >
        <div className="container">
          <div className="head">
            <h1>Meet our Trainers</h1>
          </div>
          <div className="rows">
            <div className="row">
              <div className="image">
                <img src={trainer1} alt="trainers" />
              </div>
              <div className="content">
                <div className="name">
                  <h3>Alice Smith</h3>
                  <small>Yoga Expert</small>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro rerum eveniet optio molestiae.
                </p>
                <div className="button">
                  <Link to="/">View class times</Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="image">
                <img src={trainer2} alt="trainers" />
              </div>
              <div className="content">
                <div className="name">
                  <h3>Alice Smith</h3>
                  <small>Yoga Expert</small>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro rerum eveniet optio molestiae.
                </p>
                <div className="button">
                  <Link to="/">View class times</Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="image">
                <img src={trainer3} alt="trainers" />
              </div>
              <div className="content">
                <div className="name">
                  <h3>Alice Smith</h3>
                  <small>Yoga Expert</small>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro rerum eveniet optio molestiae.
                </p>
                <div className="button">
                  <Link to="/">View class times</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trainers;
