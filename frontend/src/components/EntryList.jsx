import React, { useState, useEffect } from "react";
import { fetchEntries, deleteEntry } from '../api/entries'
import { useNavigate } from "react-router-dom";

const Entry = ({ imagen_destacada, titulo, contenido, autor, fecha_publicacion }) => {
  const navigate = useNavigate();
  return (
    <article
      key={0}
      className=" group flex max-w-xl flex-col items-start justify-between gap-2"
    >
      <div className="w-full rounded-xl cursor-pointer aspect-[16/11] mb-2
            overflow-hidden  transition-all">
        <img
          className="w-full h-full object-cover"
          src={imagen_destacada}
          alt={titulo}
        />
      </div>
      <div className="flex items-center gap-x-4 text-xs">
        <time
          dateTime={new Date(fecha_publicacion).toDateString()}
          className="text-gray-500 dark:text-white/50"
        >
          {new Date(fecha_publicacion).toDateString()}
        </time>
      </div>
      <div className="relative ">
        <h3 className="text-lg font-semibold leading-6">
          <span className="absolute inset-0" />
          {titulo}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 ">
          {contenido}
        </p>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="relative mt-2 flex items-center gap-x-4">
          <img
            src={"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
            alt="author profile picture"
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold ">
              <a href={'#'}>
                <span className="absolute inset-0" />
                {autor}
              </a>
            </p>
          </div>
        </div>

        <button onClick={() => {
          navigate('/entry-form?new_item=false&id=1')
        }} className="px-6 text-sm h-6 bg-blue-300 rounded">Edit</button>
      </div>
    </article>
  );
};
const exdata = [
  {
    titulo: "Titulo de la entrada",
    contenido: "Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada",
    imagen_destacada: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    autor: "Autor de la entrada",
    fecha_publicacion: "2022-01-01"

  },
  {
    titulo: "Titulo de la entrada",
    contenido: "Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada",
    imagen_destacada: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    autor: "Autor de la entrada",
    fecha_publicacion: "2022-01-01"
  },
  {
    titulo: "Titulo de la entrada",
    contenido: "Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada",
    imagen_destacada: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    autor: "Autor de la entrada",
    fecha_publicacion: "2022-01-01"

  },
  {
    titulo: "Titulo de la entrada",
    contenido: "Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada",
    imagen_destacada: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    autor: "Autor de la entrada",
    fecha_publicacion: "2022-01-01"
  },
  {
    titulo: "Titulo de la entrada",
    contenido: "Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada",
    imagen_destacada: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    autor: "Autor de la entrada",
    fecha_publicacion: "2022-01-01"

  },
  {
    titulo: "Titulo de la entrada",
    contenido: "Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada",
    imagen_destacada: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    autor: "Autor de la entrada",
    fecha_publicacion: "2022-01-01"
  }, {
    titulo: "Titulo de la entrada",
    contenido: "Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada",
    imagen_destacada: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    autor: "Autor de la entrada",
    fecha_publicacion: "2022-01-01"

  },
  {
    titulo: "Titulo de la entrada",
    contenido: "Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada Contenido de la entradaContenido de la entradaContenido de la entradaContenido de la entrada",
    imagen_destacada: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    autor: "Autor de la entrada",
    fecha_publicacion: "2022-01-01"
  }
]
const EntryList = () => {
  const navigate = useNavigate()
  const [list, setList] = useState();
  const getEntries = async () => {
    const list = await fetchEntries();
    setList(list);
  }
  useEffect(() => {
    getEntries()
  }, [])
  return (

    <div className="bg-[#161616] pt-24 sm:pb-32 min-h-[90vh]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
        <div className="mx-auto w-full lg:mx-0 flex flex-row justify-between items-center ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white  sm:text-4xl">
            Entry List
          </h2>

          <button onClick={() => {
            navigate('/entry-form?new_item=true')
          }} className="px-6 text-sm h-10 bg-blue-500 rounded">Create Entry</button>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 border-t
             border-gray-200 pt-5 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {exdata.map((item, index) => (
            <Entry
              key={index}
              contenido={
                item?.contenido || ''
              }
              titulo={item?.titulo || ''}
              imagen_destacada={item?.imagen_destacada || ''}
              autor={item?.autor || ''}
              fecha_publicacion={item?.fecha_publicacion || ''}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default EntryList;
