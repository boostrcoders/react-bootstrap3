import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./News.css";

export default class News extends Component {
  render() {
    return (
      <div>
        <Image
          src="https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?cs=srgb&dl=coffee-cup-information-97050.jpg&fm=jpg"
          className="header-image"
        />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h2>News</h2>
            <Row>
              <Col xs={12} sm={8} className="main-section">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
              <Col xs={12} sm={4} className="sidebar-section">
                <Image
                  src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=background-calm-clouds-747964.jpg&fm=jpg"
                  className="news-profile-pic"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </Col>
        </Grid>
      </div>
    );
  }
}
