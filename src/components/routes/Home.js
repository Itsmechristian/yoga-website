import React, { Component } from "react";

// Images
import yoga1 from "../../assets/images/yoga1.jpg";
import playButton from "../../assets/images/playbutton.png";
import meditation from "../../assets/images/meditation.png";
import stepper from "../../assets/images/stepper.png";
import trainers from "../../assets/images/trainers.png";
import backviewbalance from '../../assets/images/backviewbalance.jpg';
import aerobics from '../../assets/images/aerobics.jpg';
import exercise from '../../assets/images/exercise.jpg'

import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <header
          style={{
            backgroundImage: `url(${yoga1})`,
          }}>
          <div className="container">
            <div className="text">
              <h1>Experience the best workout humanly possible</h1>
            </div>
          </div>
        </header>
        <section className="one">
          <div className="container">
            <div className="wrapper">
              <h1>Yoga
                <span>
                  {" "}far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts. Separated
                  they live in.
                </span>
              </h1>
              <div className="button">
                <a href="http://itsmechristian.co.uk">
                  <img
                    src={playButton}
                    alt="play-button"
                    height="80"
                    width="80"/>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="two">
          <div className="container">
            <div className="head">
              <h1>
                Explore our services
              </h1>
            </div>
            <div className="rows">
              <div className="row">
                <div className="image">
                  <img src={meditation} alt="meditation" />
                </div>
                <div className="content">
                    <h1 style={{ textAlign: "center"}}>YOGA</h1>
                    <p style={{ textAlign: "center", lineHeight: 1.8}}>Amet consectetur adipisicing elit. Quae iste ab dolores excepturi fuga placeat aliquam quibusdam deleniti vero cupiditate.</p>
                </div>
              </div>
              <div className="row">
                <div className="image">
                  <img src={stepper} alt="stepper" />
                </div>
                <div className="content">
                    <h1 style={{ textAlign: "center"}}>Exercise</h1>
                    <p style={{ textAlign: "center", lineHeight: 1.8}}>Amet consectetur adipisicing elit. Quae iste ab dolores excepturi fuga placeat aliquam quibusdam deleniti vero cupiditate.</p>
                </div>
              </div>
              <div className="row">
                <div className="image">
                  <img src={trainers} alt="trainers"  height="100" width="100"/>
                </div>
                <div className="content">
                    <h1 style={{ textAlign: "center"}}>Training Programme</h1>
                    <p style={{ textAlign: "center", lineHeight: 1.8}}>Amet consectetur adipisicing elit. Quae iste ab dolores excepturi fuga placeat aliquam quibusdam deleniti vero cupiditate.</p>
                </div>
              </div>
            </div>
            <div className="button">
              <Link to="#">Get in touch</Link>
            </div>
          </div>
        </section>
        <section className="three">
            <div className="container">
                <div className="head">
                  <h1>All in one Yoga classes</h1>
                </div>
                <div className="rows">
                  <div className="row">
                    <div className="image">
                        <img src={aerobics} alt="aerobics"/>
                    </div>
                    <div className="content">
                      <h1>Aerobics</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="image">
                        <img src={backviewbalance} alt="backviewbalance"/>
                    </div>
                    <div className="content">
                        <h1>Yoga Programme</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="image">
                        <img src={exercise} alt="exercise"/>
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
        </section>
        <section className="four">
          
        </section>
      </div>
    );
  }
}

export default Home;
