
import React, { Component } from "react";

// Components
import Services from '../common/Services';
import YogaClasses from "../common/YogaClasses";
import Testimonial from "../common/Testimonial";


// Images
import yoga1 from "../../assets/images/yoga1.jpg";
import playButton from "../../assets/images/playbutton.png";
import Trainers from "../common/Trainers";

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
          <Services />
        </section>
        <section className="three">
          <YogaClasses />
        </section>
        <section className="four">
          <Trainers />
        </section>
        <section className="five">
          <Testimonial />
        </section>
      </div>
    );
  }
}

export default Home;
