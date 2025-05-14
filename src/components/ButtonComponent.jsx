

import React from "react";
import "./buttonComponent.css";
import { advanced } from "../features/advanced";
import { display } from "../features/display";

const ButtonComponent = (
    {    type,
         buttonType,
         placeholder,
         link, 
         style ,
         size,
         typography={},
         colors={},
        //  Transform={},
         shadow={},
    }) => {
  const handleClick = (e) => {
    const isLink =
      link && (link.startsWith("http://") || link.startsWith("https://"));
    if (isLink) {
      window.open(link, "_blank");
    } else {
      e.preventDefault(); // prevent default anchor behavior if needed
      console.log("non-link action here");
    }
  };
  const classNames = `button-component ${buttonType}`;
const finalStyle={...style,...display(typography,colors,shadow),...advanced(size)}

  return (
    <button
      onClick={handleClick}
      className={classNames}
      style={finalStyle}
      type={type}// this is HTML attribute, not the prop
    >
      {placeholder}
    </button>
  );
};

export default ButtonComponent;
