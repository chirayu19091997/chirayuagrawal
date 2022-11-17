import React from "react";
import "./Card.css";

const Card = ({
  customStyles,
  customClassname,
  children,
  isLeft,
  gradientShaders,
}) => {
  const direction = isLeft ? "left" : "right";
  return (
    <div
      className={`card ${customClassname}`}
      style={{
        ...customStyles,
        background: `linear-gradient(to ${direction}, ${gradientShaders.left},${gradientShaders.right})`,
      }}
    >
      <div
        className="blur"
        style={{
          ...customStyles,
          marginLeft: "0vw",
        }}
      >
        {children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  gradientShaders: { left: "#1565C0", right: "#b92b27" },
};

export default Card;
