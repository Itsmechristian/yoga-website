import React, { Component } from "react";

class Pricing extends Component {
  render() {
    return (
      <div className="pricing" style={{
          background: this.props.background || '#fafafa'
      }}>
        <div className="container">
          <div className="heading">
            <h1>Pricing</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;