

import React from "react";
import "./buttonComponent.css";

const ButtonComponent = (
    {    type,
         buttonType,
         placeholder,
         link, 
         style 
    }) => {
  const handleClick = (e) => {
    const isLink =
      link && (link.startsWith("http://") || link.startsWith("https://"));
    if (isLink && type ==='link') {
      window.open(link, "_blank");
    } else {
      e.preventDefault(); // prevent default anchor behavior if needed
      console.log("non-link action here");
    }
  };
  const classNames = `button-component ${buttonType}`;

 if (type === "link") {
   return (
     <a href="#" onClick={handleClick} className={classNames} style={style}>
       {placeholder}
     </a>
   );
 }
  return (
    <button
      onClick={handleClick}
      className={classNames}
      style={style}
      type="text    " // this is HTML attribute, not the prop
    >
      {placeholder}
    </button>
  );
};

export default ButtonComponent;
