import React from "react";
import { Container } from "react-bootstrap";
import Buttons from "./Buttons";

export default function MenuBar() {
  return (
    <>
      <Container>
        <h3>
          Orden : <Buttons />
        </h3>
      </Container>
    </>
  );
}
