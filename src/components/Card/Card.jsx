import React, { useState } from "react";
import "./cardStyles.css";

export default function Card({ title, description }) {
  const [isHovered, setIshovered] = useState(false);

  function handleMouseOver() {
    setIshovered(true);
  }

  function handleMouseOut() {
    setIshovered(false);
  }

  return (
    <div
      className={`card-wrapper ${isHovered ? "hovered" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src="/CloudUpload.png" alt="upload icon" />
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
