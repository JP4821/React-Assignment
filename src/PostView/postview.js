import React, { useEffect, useState } from "react";
import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Logo from "../assets/logo.png";
import One from "../assets/1.jpg";
import Two from "../assets/2.jpg";
import Three from "../assets/3.jpg";

const Postview = () => {
  const imgPath = [One, Two, Three];
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/user")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  console.log(data);
  return (
    <>
      <Navbar expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#" className="text-dark">
              <h2>
                <i className="fas fa-camera"></i>
              </h2>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section className="pt-5">
        <Row className="d-flex justify-content-center align-items-center mx-0">
          <Col md={5}>
            {data.map((dt, index) => {
              let date = new Date(dt.date);
              date = date.toLocaleString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });
              return (
                <Card className="mb-4" key={index}>
                  <Card.Header className="d-flex justify-content-between align-items-center bg-white">
                    <div className="text-start lh-1">
                      <h3 className="mb-0">
                        <b>{dt.name}</b>
                      </h3>
                      <p className="mb-0">{dt.location}</p>
                    </div>
                    <h4>...</h4>
                  </Card.Header>
                  <Card.Img src={dt.PostImage} />
                  <Card.Body className="py-1 text-start">
                    <div className="d-flex justify-content-between align-items-center fs-5">
                      <span>
                        <i className="far fa-heart pe-3"></i>
                        <i className="fas fa-rocket"></i>
                      </span>
                      <span>{date}</span>
                    </div>
                    <p>{dt.likes} Likes</p>
                    <h5>{dt.description}</h5>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Postview;
