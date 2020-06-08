import React from "react";
import { useRecoilValue } from "recoil";
import { counterWithId } from "../atoms/Atoms";

export default function ComponentValueWithId({ id }) {
  const counter = useRecoilValue(counterWithId(id));

  return (
    <div style={{ marginLeft: 30 }}>
      <p>Component Value Only</p>
      <p>{counter}</p>
    </div>
  );
}
