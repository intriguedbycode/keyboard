import React, { Component } from "react";

export default function TextBox(props) {
  return (
    <div className="type-area">
      <h1>Virtual Keyboard</h1>
      <textarea
        value={props.value}
        onChange={props.onChangeValue}
        className="use-virtual-input"
        placeholder="Press keys to type"
        cols="20"
        rows="5"
      >
        {props.value}
      </textarea>
    </div>
  );
}
