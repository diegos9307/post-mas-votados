import React from "react";
import { Button } from "react-bootstrap";

export default function Buttons({ db, setDb }) {
  const handleAscendiente = (e) => {
    let ascValue = db.sort((a, b) => a.votes - b.votes);
    console.log(ascValue);
    setDb(ascValue);
  };

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
