import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Type from "./type";

function Home() {
  return (
    <section>
      <Container className="home-name-type" id="id">
        <Row>
          <h1>Sahil Patel</h1>
        </Row>

        <Row>
          <p style={{ paddingRight: "4px" }}>I'm probably</p>
          <Type />
        </Row>
      </Container>
    </section>
  );
}

export default Home;
