import React from "react";
import ComponentValueWithId from "./ComponentValueWithId";
import ComponentIncrementWithId from "./ComponentIncrementWithId";

export default function CountersWrapper({ id }) {
  return (
    <div style={{ marginLeft: 30 }}>
      <h2>Wrapper with id {id}</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ComponentIncrementWithId id={id} />
        <ComponentValueWithId id={id} />
      </div>
    </div>
  );
}
