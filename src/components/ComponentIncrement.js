import React from "react";

import { counterAtom } from "../atoms/Atoms";
import { useRecoilState } from "recoil";

export default function ComponentIncrement(props) {
  const [counter, setCounter] = useRecoilState(counterAtom);

  function onIncrementClick() {
    setCounter((current) => current + 1);
  }
  return (
    <div>
      <p>Component 1</p>
      <p>{counter}</p>
      <input onClick={onIncrementClick} type="submit" value="Increment" />
    </div>
  );
}
