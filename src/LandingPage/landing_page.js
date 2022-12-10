import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Land from "../assets/unnamed.png";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center mx-0 py-5">
        <Col md={4}>
          <img src={Land} alt="" />
        </Col>
        <Col md={4} className="text-center">
          <h1 className="text-success">10x Team 04</h1>
          <Button
            variant="outline-success"
            className="px-3"
            onClick={() => {
              navigate("/postview");
            }}
          >
            Enter
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default LandingPage;
