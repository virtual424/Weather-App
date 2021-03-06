import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <section
      className={`${styles.card} ${props.className ? props.className : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </section>
  );
};

export default Card;
