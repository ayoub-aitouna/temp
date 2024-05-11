import React from "react";

const Entry = ({ titulo, contenido }) => {
  return (
    <li
      className="w-96 min-h-96 bg-white border
    flex flex-row  justify-start items-start gap-2 p-4 rounded shadow"
    >
      <img
        className="w-10 h-10 object-cover rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmP3sgy4ULmNQgAajfnDXomXm3EQBocUfH_D7avoJRw&s"
      />
      <div className="flex-1 w-full h-full bg-red-500 flex flex-col flex-wrap">
        <h2 className="text-lg font-semibold">{titulo}</h2>
        <p className="text-gray-600 h-full bg-white w-full overflow-hidden">{contenido}</p>
      </div>
    </li>
  );
};

const EntryList = () => {
  return (
    <div className="bg-[#161616] w-full h-screen grid place-content-center overflow-y-scroll ">
      <ul className="flex flex-col gap-3">
        {Array.from({ length: 30 }).map((item, index) => (
          <Entry
            key={index}
            contenido={
              "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
            }
            titulo={"asaasd"}
          />
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
