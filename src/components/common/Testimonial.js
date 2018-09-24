import React, { Component, createRef } from "react";
import imageplaceholder from "../../assets/images/Trainer-1.png";

class Testimonial extends Component {
  testimonialRef = createRef()
  bodyRef = createRef()

  state = {
    testimonials: [
      {
        id: 1,
        name: "Robert C. Ledbetter",
        position: "Gymnast",
        image: imageplaceholder,
        quote:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam iusto maiores nisi quia sunt possimus itaque vero. Voluptates minus ducimus, id quia aut distinctio quae rerum soluta illo, labore possimus facere recusandae dolorem voluptate enim ipsam, alias quam aliquam aspernatur asperiores eum! Ex, saepe facere at ut sint temporibus."
      },
      {
        id: 2,
        name: "Robert C. Ledbetter",
        position: "Gymnast",
        image: imageplaceholder,
        quote:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam iusto maiores nisi quia sunt possimus itaque vero. Voluptates minus ducimus, id quia aut distinctio quae rerum soluta illo, labore possimus facere recusandae dolorem voluptate enim ipsam, alias quam aliquam aspernatur asperiores eum! Ex, saepe facere at ut sint temporibus."
      },
      {
        id: 3,
        name: "Robert C. Ledbetter",
        position: "Gymnast",
        image: imageplaceholder,
        quote:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam iusto maiores nisi quia sunt possimus itaque vero. Voluptates minus ducimus, id quia aut distinctio quae rerum soluta illo, labore possimus facere recusandae dolorem voluptate enim ipsam, alias quam aliquam aspernatur asperiores eum! Ex, saepe facere at ut sint temporibus."
      },
      {
        id: 4,
        name: "Robert C. Ledbetter",
        position: "Gymnast",
        image: imageplaceholder,
        quote:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam iusto maiores nisi quia sunt possimus itaque vero. Voluptates minus ducimus, id quia aut distinctio quae rerum soluta illo, labore possimus facere recusandae dolorem voluptate enim ipsam, alias quam aliquam aspernatur asperiores eum! Ex, saepe facere at ut sint temporibus."
      },
      {
        id: 5,
        name: "Robert C. Ledbetter",
        position: "Gymnast",
        image: imageplaceholder,
        quote:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam iusto maiores nisi quia sunt possimus itaque vero. Voluptates minus ducimus, id quia aut distinctio quae rerum soluta illo, labore possimus facere recusandae dolorem voluptate enim ipsam, alias quam aliquam aspernatur asperiores eum! Ex, saepe facere at ut sint temporibus."
      }
    ],
    bodyWidth: null
  };

  componentDidMount() {
      this.setState({
          width: this.bodyRef.current.offsetWidth * this.state.testimonials.length
      })
  }

  render() {
        return (
            <div className="testimonials">
              <div className="container">
                <div className="head">
                  <h1>Testimonials</h1>
                </div>
                <div className="body" ref={this.bodyRef}>
                  <div className="slider" style={{
                      maxWidth: this.state.bodyWidth
                  }}>
                  {this.state.testimonials.map(testimonial => (
                    <div
                    ref={(this.testimonialRef.current === null) ? this.testimonialRef : null}
                    className="testimonial" key={testimonial.id}>
                      <div className="image">
                          <img src={testimonial.image} alt="testimonialimg" />
                      </div>
                      <div className="quote" />
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          );
  }
}

export default Testimonial;
