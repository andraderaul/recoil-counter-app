import React from "react";

import { counterWithId } from "../atoms/Atoms";
import { useRecoilState } from "recoil";

export default function ComponentIncrementWithId({ id }) {
  const [counter, setCounter] = useRecoilState(counterWithId(id));

  function onIncrementClick() {
    setCounter((current) => current + 1);
  }
  return (
    <div style={{ marginRight: 30 }}>
      <p>Component 1</p>
      <p>{counter}</p>
      <input onClick={onIncrementClick} type="submit" value="Increment" />
    </div>
  );
}
