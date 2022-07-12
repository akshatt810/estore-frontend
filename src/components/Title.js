import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="title">
      <h2 className="text-title">
        {name} <strong className="text-orange">{title}</strong>
      </h2>
    </div>
  );
}
