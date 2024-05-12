import React, { useState, useEffect } from "react";
import { fetchEntries, deleteEntry } from "../api/entries";

const Entry = ({ entry, handleUpdate = () => { }, handleDelete = () => { } }) => {
  const onDelete = async () => {
    await deleteEntry(entry.id);
    handleDelete(entry.id);
  };
  return (
    <article
      key={0}
      className=" group flex max-w-xl flex-col items-start justify-between gap-2"
    >
      <div
        className="w-full rounded-xl cursor-pointer aspect-[16/11] mb-2
            overflow-hidden  transition-all"
      >
        <img
          className="w-full h-full object-cover"
          src={entry.imagen_destacada || "https://placehold.co/600x400"}
          alt={entry.titulo}
        />
      </div>
      <div className="flex items-center gap-x-4 text-xs">
        <time
          dateTime={new Date(entry.fecha_publicacion).toDateString()}
          className="text-gray-500 dark:text-white/50"
        >
          {new Date(entry.fecha_publicacion).toDateString()}
        </time>
      </div>
      <div className="relative ">
        <h3 className="text-lg font-semibold leading-6">
          <span className="absolute inset-0" />
          {entry.titulo}
        </h3>
        <h6 className="text-lg font-semibold leading-6">
          <span className="absolute inset-0" />
          {entry.sub_titulo}
        </h6>
        <p className="mt-2 line-clamp-3 text-sm leading-6 ">
          {entry.contenido}
        </p>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="relative mt-2 flex items-center gap-x-4">
          <img
            src={entry.imagen_destacada}
            alt="author profile picture"
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold ">
              <a href={"#"}>
                <span className="absolute inset-0" />
                {entry.autor}
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <button
            onClick={() => {
              handleUpdate(entry);
            }}
            className="px-5 text-sm h-6 bg-blue-600 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => {
              onDelete();
            }}
            className="px-2 text-sm h-6 bg-red-600 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};
const EntryList = ({ ShowForm = () => { }, refresh }) => {
  const [list, setList] = useState([]);
  const getEntries = async () => {
    const list = await fetchEntries();
    setList(list);
  };
  useEffect(() => {
    getEntries();
  }, [refresh]);
  return (
    <div className="relative bg-[#161616] min-h-[100vh] pt-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
        <div className="mx-auto w-full lg:mx-0 flex flex-row justify-between items-center ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white  sm:text-4xl">
            Entry List
          </h2>

          <button
            onClick={() => {
              ShowForm(null);
            }}
            className="px-6 text-sm h-10 bg-blue-500 rounded"
          >
            Create Entry
          </button>
        </div>
        <div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 
              pt-5 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {list.map((item, index) => (
            <Entry
              key={index}
              entry={item}
              handleDelete={(id) => {
                setList(list.filter((item) => item.id !== id));
              }}
              handleUpdate={(item) => {
                ShowForm(item);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntryList;
