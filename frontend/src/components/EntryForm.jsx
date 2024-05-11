import React, { useEffect, useState } from "react";
import axios from "axios";
import { createEntry, updateEntry } from "../api/entries";

const Input = ({
  type,
  placeholder,
  title,
  name,
  onChange,
  value,
  additionalStyles,
}) => {
  return (
    <div className="relative flex flex-col w-full gap-[10px]">
      <label className="text-[14px] text-[#a2a2a2]" htmlFor={type}>
        {title}
      </label>
      <input
        className={`w-full h-[50px] bg-[#606060]/50 outline-none px-2 ${additionalStyles}`}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        id={type}
      />
    </div>
  );
};

const EntryForm = ({
  entry = null,
  close = () => {},
  refreshEntries = (item) => {},
}) => {
  const [titulo, setTitulo] = useState(entry ? entry.titulo : "");
  const [contenido, setContenido] = useState(entry ? entry.contenido : "");
  const [imagenDestacada, setImagenDestacada] = useState(
    entry ? entry.imagen_destacada : ""
  );
  const [autor, setAutor] = useState(entry ? entry.autor : "");
  const [fechaPublicacion, setFechaPublicacion] = useState(
    entry ? entry.fecha_publicacion : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = {
      titulo,
      contenido,
      imagen_destacada: imagenDestacada,
      autor,
      fecha_publicacion: fechaPublicacion,
    };

    try {
      if (entry) {
        await updateEntry(entry.id, newEntry);
      } else {
        await createEntry(newEntry);
      }
      refreshEntries();
    } catch (error) {
      console.error("Error saving entry:", error);
    }
  };

  return (
    <div className="absolute top-0 w-full bg-[#161616] h-screen overflow-hidden">
      <div className=" absolute z-[99] top-[500px] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div
          className="flex flex-col w-[374px] gap-[45px]
      rounded-[4px] bg-[#303030] px-[25px] py-[27px] justify-center items-center"
        >
          <div className="flex-1 w-full items-center justify-start flex flex-col mt-[10px] gap-[10px]">
            <h2 className="font-semibold tracking-[4%] text-[20px] text-white">
              Create / Update Entry
            </h2>
            <form
              className="flex flex-col w-full items-center gap-[10px]"
              onSubmit={handleSubmit}
            >
              <Input
                type="text"
                title="Title:"
                name="Title"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder=""
              />
              <Input
                type="text"
                title="Content:"
                name="Content"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
                placeholder=""
              />
              <Input
                type="text"
                title="Featured Image URL:"
                name="Featured Image URL"
                value={imagenDestacada}
                onChange={(e) => setImagenDestacada(e.target.value)}
                placeholder=""
              />
              <Input
                type="text"
                title="Author:"
                name="Author"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                placeholder=""
              />

              <Input
                type="date"
                title="Publication Date:"
                name="Publication Date"
                value={fechaPublicacion}
                onChange={(e) => setFechaPublicacion(e.target.value)}
                placeholder=""
              />

              <button
                type="submit"
                className="w-[318px] h-[50px] bg-[#004E99] text-white"
              >
                Submit
              </button>
              <button
                onClick={() => {
                  close();
                }}
                type="button"
                className="w-[318px] h-[50px] bg-[#474747] text-white"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryForm;
