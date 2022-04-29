import React from "react";
import "./Header.css";
import MenuBar from "./MenuBar";

export default function Header({ db, setDb }) {
  return (
    <header className="center-header">
      <h1>Blog Posts Populares</h1>
      <MenuBar setDb={setDb} db={db} />
    </header>
  );
}
