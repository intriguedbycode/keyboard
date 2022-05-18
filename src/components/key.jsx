import React, { Component } from "react";

export default function Key(props) {
  function getKeyClasses() {
    let classes = "keyboard-key";
    if (["<", "ent", "@", "ENT"].includes(props.value)) {
      classes += " keyboard-key-wide";
    } else if (["spacebar", "SPACEBAR"].includes(props.value)) {
      classes += " keyboard-key-xtra-wide";
    } else if (props.value === "caps") {
      classes += " keyboard-key-wide keyboard-key-activatable";
    } else if (props.value === "CAPS") {
      classes +=
        " keyboard-key-wide keyboard-key-activatable keyboard-key-active";
    }

    return classes;
  }

  return ["BR", "br"].includes(props.value) ? (
    <br />
  ) : (
    <button
      onClick={() => props.onChange(props.value)}
      className={getKeyClasses()}
    >
      {props.value}
    </button>
  );
}
