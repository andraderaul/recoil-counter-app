import React from "react";
import { useRecoilValue } from "recoil";
import { counterAtom } from "../atoms/Atoms";

export default function ComponentValue(props) {
  const counter = useRecoilValue(counterAtom);

  return (
    <div>
      <p>Component Value Only</p>
      <p>{counter}</p>
    </div>
  );
}
