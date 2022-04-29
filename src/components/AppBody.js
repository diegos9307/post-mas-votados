import React, { useState, useEffect } from "react";
import Header from "./Header";
import dbData from "../data";
import Cards from "./Cards";

const AppBody = () => {
  const [db, setDb] = useState(dbData);

  useEffect(() => {
    console.log("Se actualizo db");
    console.log(db);
  }, [db]);

  console.log(db);
  return (
    <div>
      {console.log(`${db} prueba`)}
      <Header setDb={setDb} db={db} />
      {db.length === 0 ? (
        <h2>Sin Datos</h2>
      ) : (
        db.map((el) => <Cards key={el.id} data={el} />)
      )}
      {/* <Cards  data={db} />  */}
    </div>
  );
};

export default AppBody;
