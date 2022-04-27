import React from "react";
import { Button } from "react-bootstrap";

export default function Buttons() {
  const handleAscendiente = (e) => {};

  const handleDescendiente = (e) => {};

  return (
    <>
      <Button variant="outline-primary" size="lg" onClick={handleAscendiente}>
        Ascendiente
      </Button>{" "}
      <Button variant="primary" size="lg" active onClick={handleDescendiente}>
        Descendiente
      </Button>
    </>
  );
}
