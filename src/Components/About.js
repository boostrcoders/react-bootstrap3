import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Image
          src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?cs=srgb&dl=chill-guy-high-tatras-91224.jpg&fm=jpg"
          className="header-image"
        />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src="https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?cs=srgb&dl=adolescent-attractive-beautiful-638700.jpg&fm=jpg"
              className="about-profile-pic"
              rounded
            />
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}
