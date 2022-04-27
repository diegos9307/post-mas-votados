import React from "react";
import Cards from "./componets/Cards";
import Header from "./componets/Header";
import MenuBar from "./componets/MenuBar";

function App() {
  return (
    <>
      <div className="header">
        <Header />
        <MenuBar />
      </div>
      <Cards />
    </>
  );
}

export default App;
