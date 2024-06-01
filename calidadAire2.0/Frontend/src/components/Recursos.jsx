import React from "react";

const Recursos = ({ imageSrc, title, description, URL }) => {
  return (
    <div className="p-6 relative">
      <div className="flex border rounded-lg overflow-hidden shadow-md p-6 bg-slate-200">
        {/* Columna de la imagen */}
        <div className="flex-shrink-0 w-[40%]">
          <img
            src={imageSrc}
            alt=""
            className="h-56 rounded-lg  object-cover"
          />
        </div>
        {/* Columna del texto */}
        <div className="p-4 ">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">
           {description}
          </p>
          <br />
          <br />
          <br />          
          <a href={URL} target="_blank" className="bottom-12 right-12 absolute"><span className="text-secundario hover:text-indigo-700">Ver mas</span></a>
        </div>
      </div>
    </div>
  );
};

export default Recursos;
