import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Pregunta from "./Pregunta";
import { useLocation } from "react-router-dom";
import { API_URL } from "../constante";

const Encuesta = () => {
  
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  
  const nombre = searchParams.get("nombre");
  const correo = searchParams.get("correo");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const r1 = parseInt(event.target.r1.value);
    const r2 = parseInt(event.target.r2.value);
    const r3 = parseInt(event.target.r3.value);
    const r4 = parseInt(event.target.r4.value);
    const r5 = parseInt(event.target.r5.value);    

    try {
      const response = await fetch(`${API_URL}/encuesta`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          correo: correo,
          r1: r1,
          r2: r2,
          r3: r3,
          r4: r4,
          r5: r5,
        }),
      });
      const data = await response.json();
      if(data.statusCode==200){
        const id=data.body.id;
        console.log(id);
        navigate(`/respuestas?id=${id}`);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };
  return (
    <div className="bg-slate-200 rounded-md">
      <div className="p-6 relative">
        <div className=" border rounded-lg overflow-hidden shadow-md p-6 bg-white ">
          <div className="p-4 text-gray-600">
            <h1 className="text-xl font-semibold mb-2">
              Encuesta de validacion
            </h1>
            <hr    />
            <br />
            <br />

            <form
              action=""
              onSubmit={handleSubmit}
              className="  space-x-4 bottom-12 left-34  "
            >
              <div className="space-y-4">
                <Pregunta
                  nombre="r1"
                  res1="1: Muy complicado"
                  res2="2: Complicado"
                  res3="3: Neutral"
                  res4="4: Sencillo"
                  res5="5: Muy sencillo"
                  enunciado="P1.¿Qué tan fácil o difícil fue el proceso de registro en tu sitio web?"
                />
                <hr className="border-t-1 border-indigo-200 " />
                <Pregunta
                  nombre="r2"
                  res1="1: Muy difícil de encontrar"
                  res2="2: Difícil de encontrar"
                  res3="3: Neutral"
                  res4="4: Fácil de encontrar"
                  res5="5: Muy fácil de encontrar"
                  enunciado="P2.¿Qué tan fácil fue para ti encontrar la información que necesitabas en nuestra página web de calidad del aire?"
                />
                <hr className="border-t-1 border-indigo-200 " />
                <Pregunta
                  nombre="r3"
                  res1="1: Nada clara"
                  res2="2: Poco clara"
                  res3="3: Neutral"
                  res4="4: Clara"
                  res5="5: Muy clara"
                  enunciado="P3.¿Qué tan clara te resultó la información proporcionada sobre el proyecto de calidad del aire en nuestra plataforma?"
                />
                <hr className="border-t-1 border-indigo-200 " />
                <Pregunta
                  nombre="r4"
                  res1="1: Nada útiles"
                  res2="2: Poco útiles"
                  res3="3: Neutral"
                  res4="4: Útiles"
                  res5="5: Muy útiles"
                  enunciado="P4.¿Qué tan útiles encontraste las fuentes de conocimiento proporcionadas en nuestra plataforma para comprender la calidad del aire?"
                />
                <hr className="border-t-1 border-indigo-200 " />
                <Pregunta
                  nombre="r5"
                  res1="1: No recomendable"
                  res2="2: Poco Recomendable"
                  res3="3: Neutral"
                  res4="4: Recomendable"
                  res5="5: Muy recomendable"
                  enunciado="P5.¿Recomendarías tu sitio web a otras personas que estén interesadas en la calidad del aire?"
                />
                <hr className="border-t-1 border-indigo-200 " />
              </div>

              <div className=" bottom-12 right-12  absolute">
                <button
                  type="submit"
                  className="bg-secundario py-2 px-8 transition-all duration-300 rounded-lg hover:text-white hover:bg-indigo-500"
                >
                  Finalizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encuesta;
