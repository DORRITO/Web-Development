import React, { Component } from "react";

import { Image, Jumbotron } from "react-bootstrap";

class Slogan extends Component {
  render() {
    return (
      <div>
        <Image
          className="Background1"
          src="https://nusura.staging.wpengine.com/wp-content/uploads/2018/07/page-home-1.jpg"
          responsive
        />
        <Jumbotron className="Grey">
          <div>UNIQUE EXPERIENCE</div>
          <div>INNOVATIVE TECHNOLOGIES</div>
          <h3>BUILDING A BETTER, SAFER, MORE RESILIENT FUTURE</h3>
        </Jumbotron>
      </div>
    );
  }
}

export default Slogan;
