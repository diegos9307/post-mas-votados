import React from "react";
import { Container } from "react-bootstrap";
import Buttons from "./Buttons";

export default function MenuBar({ db, setDb }) {
  return (
    <>
      <Container>
        <h3>
          Orden : <Buttons setDb={setDb} db={db} />
        </h3>
      </Container>
    </>
  );
}
