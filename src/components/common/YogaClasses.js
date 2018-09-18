import React, { Component } from "react";
import { Link } from 'react-router-dom';

// Images
import backviewbalance from '../../assets/images/backviewbalance.jpg';
import aerobics from '../../assets/images/aerobics.jpg';
import exercise from '../../assets/images/exercise.jpg'


class YogaClasses extends Component {
  render() {
    return (
      <div className="yogaclasses">
        <div className="container">
          <div className="head">
            <h1>All in one Yoga classes</h1>
          </div>
          <div className="rows">
            <div className="row">
              <div className="image">
                <img src={aerobics} alt="aerobics" />
              </div>
              <div className="content">
                <h1>Aerobics</h1>
              </div>
            </div>
            <div className="row">
              <div className="image">
                <img src={backviewbalance} alt="backviewbalance" />
              </div>
              <div className="content">
                <h1>Yoga Programme</h1>
              </div>
            </div>
            <div className="row">
              <div className="image">
                <img src={exercise} alt="exercise" />
              </div>
              <div className="content">
                <h1>Exercise Programme</h1>
              </div>
            </div>
          </div>
          <div className="button">
            <Link to="#">Explore our classes</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default YogaClasses;
