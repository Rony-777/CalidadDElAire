import React, { useContext } from "react";
import imgEncuesta from "../assets/encuesta.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";

const Validacion = () => {
  const contexto= useContext(MyContext); 
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const nombre=event.target.nombre.value;
    const email=event.target.email.value;
    navigate(`/encuesta?nombre=${nombre}&correo=${email}`);
  };
  
  return (
    <div className="bg-slate-200 rounded-md">
      <div className="p-6 relative">
        <div className="flex border rounded-lg overflow-hidden shadow-md p-6 bg-white ">
          {/* Columna de la imagen */}
          <div className="flex-shrink-0 w-[40%]">
            <br />
            <img
              src={imgEncuesta}
              alt=""
              className="h-170 rounded-lg  object-cover"
            />
          </div>
          {/* Columna del texto */}
          <div className="p-4 text-gray-600">
            <h1 className="text-xl font-semibold mb-2">
              Encuesta de validacion{" "}
            </h1>
            <br />
            <p className="">
              Te invitamos cordialmente a participar en nuestra encuesta
              diseñada para evaluar la percepción y la satisfacción con nuestro
              sistema de calidad del aire. Por favor, responde a las siguientes
              preguntas utilizando la escala del 1 al 5. A continuación,
              encontrarás la escala completa:
            </p>
            <br />
            <p> 1 - Muy insatisfecho</p>
            <p> 2 - Insatisfecho </p>
            <p>3 - Neutral </p>
            <p>4 - Satisfecho </p>
            <p>5 - Muy satisfecho</p>
            <br />
            <p>
              Todas tus respuestas son valiosas y serán utilizadas para mejorar
              nuestro sistema de calidad del aire. Agradecemos sinceramente tu
              colaboración y tus opiniones. ¡Comencemos y gracias por tu
              contribución!
            </p>
            <br />
            <br />
            <br />

            <form
              onSubmit={handleSubmit}              
              action=""
              className="flex items-center space-x-4 bottom-12 left-34 absolute "
            >
              <div className="flex flex-col">
                <label htmlFor="nombre" className="text-gray-600">
                  Nombre:
                </label>
                <input
                  required
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="correo" className="text-gray-600">
                  Correo:
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={contexto.data}
                  className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className=" bottom-12 right-12 pt-8 px-28">
                <button
                  type="submit"
                  className="bg-secundario py-2 px-8 transition-all duration-300 rounded-lg hover:text-white hover:bg-indigo-500"
                >
                  iniciar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validacion;
