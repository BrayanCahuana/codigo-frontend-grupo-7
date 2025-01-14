import React, { useState } from "react";
import { v4 as id } from "uuid";
import { url } from "../../utils/utils";

const Create = () => {
  const [titulo, setTitulo] = useState("");
  const [body, setBody] = useState("");
  const [autor, setAutor] = useState("");

  const enviarInfo = (event) => {
    event.preventDefault();
    const blog = { titulo, body, autor, id };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => alert("blog agregado!!!."));
  };

  return (
    <div>
      <h2>Agregar un nuevo blog</h2>
      <form onSubmit={enviarInfo}>
        <div>
          <label>Titulo del blog: </label>
          <input
            type="text"
            required
            value={titulo}
            onChange={(element) => setTitulo(element.target.value)}
          />
        </div>
        <div>
          <label>Contenido: </label>
          <input
            type="text"
            required
            value={body}
            onChange={(element) => setBody(element.target.value)}
          />
        </div>
        <div>
          <label>Autor: </label>
          <input
            type="text"
            required
            value={autor}
            onChange={(element) => setAutor(element.target.value)}
          />
        </div>
        <button>Agregar blog</button>
      </form>
    </div>
  );
};

export default Create;
