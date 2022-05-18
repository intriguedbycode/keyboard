import React, { useState } from "react";
import Keyboard from "./components/keyboard";
import TextBox from "./components/textbox";

export default function App() {
  const [keys, setKeys] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "<",
    "br",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "br",
    "caps",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "ent",
    "br",
    "@",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "?",
    "br",
    "spacebar",
  ]);
  const [properties, setProperties] = useState({
    capsLock: false,
    value: "",
  });

  function toggleCaps() {
    setProperties((prevState) => {
      return { ...prevState, capsLock: !prevState.capsLock };
    });
    setKeys((prevKeys) => {
      return properties.capsLock
        ? prevKeys.map((key) => key.toLowerCase())
        : prevKeys.map((key) => key.toUpperCase());
    });
    console.log(properties.capsLock);
    console.log(keys);
  }

  function handleClick(key) {
    switch (key) {
      case "<":
        setProperties((prevState) => {
          return { ...prevState, value: prevState.value.slice(0, -1) };
        });
        break;
      case "spacebar":
        setProperties((prevState) => {
          return { ...prevState, value: prevState.value + " " };
        });
        break;
      case "SPACEBAR":
        setProperties((prevState) => {
          return { ...prevState, value: prevState.value + " " };
        });
        break;
      case "ent":
        setProperties((prevState) => {
          return { ...prevState, value: prevState.value + "\n" };
        });
        break;
      case "ENT":
        setProperties((prevState) => {
          return { ...prevState, value: prevState.value + "\n" };
        });
        break;
      case "caps":
        toggleCaps();
        break;
      case "CAPS":
        toggleCaps();
        break;
      default:
        setProperties((prevState) => {
          return {
            ...prevState,
            value: prevState.capsLock
              ? prevState.value + key.toUpperCase()
              : prevState.value + key,
          };
        });
    }
  }
  console.log(properties.value);

  return (
    <div className="main">
      <TextBox onChangeValue={handleClick} value={properties.value} />
      <Keyboard
        keys={keys}
        value={properties.value}
        capsLock={properties.capsLock}
        onToggle={toggleCaps}
        onChange={handleClick}
      />
    </div>
  );
}
