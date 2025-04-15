import React from "react";

export const AboutMe = () => {
  return (
    <div className="container">
      <form action="">
        <input
          type="text"
          placeholder="nombre/empresa"
          className="border-b-1"
        />
        <input type="text" placeholder="correo" />
        <input type="text" placeholder="mensaje" />
      </form>
    </div>
  );
};
