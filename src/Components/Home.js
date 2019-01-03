import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome To The Jungle</h2>
          <p>Explore the wilderness of the jungle.</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>

        <Row className="show-grid">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?cs=srgb&dl=adolescent-attractive-beautiful-638700.jpg&fm=jpg"
              circle
              className="profile-pic"
            />
            <h3>Name</h3>
            <p>Lorem Ipsum sadsdjaksjdlaks</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=adult-beard-boy-220453.jpg&fm=jpg"
              circle
              className="profile-pic"
            />
            <h3>Name</h3>
            <p>Lorem Ipsum sadsdjaksjdlaks</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=beautiful-brunette-cute-774909.jpg&fm=jpg"
              circle
              className="profile-pic"
            />
            <h3>Name</h3>
            <p>Lorem Ipsum sadsdjaksjdlaks</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
