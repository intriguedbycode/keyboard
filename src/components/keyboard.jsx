import React, { setState, useState } from "react";
import Key from "./key";

export default function Keyboard(props) {
  function open(initialVal, oninput, onclose) {
    console.log("s");
  }

  function close() {
    console.log("a");
  }

  return (
    <div className="keyboard">
      <div className="keyboard-keys">
        {props.keys.map((key) => (
          <Key value={key} onChange={props.onChange} />
        ))}
      </div>
    </div>
  );
}
