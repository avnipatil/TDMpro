import React from "react";
import "./Heading.css";
const Heading = (props) => {
  return (
    <>
      <h2 className={props.h1Class} data-aos="fade-down">
        <span>{props.title}</span>
      </h2>
    </>
  );
};
export default React.memo(Heading);