import React, { useState } from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Cards.css";
import dataCard from "../data";
// import ContadorVotos from "./ContadorVotos";

export default function Cards() {
  let changeBorder = {
    border: 0,
  };
  const [data] = useState(dataCard);
  // const [sumar, setSumar] = useState(second)
  // const [first, setFirst] = useState(second)

  const handleSum = (e) => {
    console.log(e);
  };

  const handleRes = (e) => {
    console.log(e);
  };

  return data.map(
    ({
      id,
      title,
      description,
      url,
      votes,
      writer_avatar_url,
      post_image_url,
    }) => (
      <Container className="main-container">
        <Row>
          <Col className="center">
            <Image src={post_image_url} className="img" />
          </Col>
          <Col xs={1} className="center">
            <Button variant="outline-secondary" onClick={handleSum}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            </Button>
            <h5>{votes}</h5>
            <Button variant="outline-secondary" onClick={handleRes}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </Button>
          </Col>
          <Col className="center">
            <Card style={changeBorder}>
              <Card.Body>
                <Card.Link href={url} target="_blank" rel="noopener">
                  {title}
                </Card.Link>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>
                  Escrito por:{" "}
                  <Image className="avatar" src={writer_avatar_url} />
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  );
}
