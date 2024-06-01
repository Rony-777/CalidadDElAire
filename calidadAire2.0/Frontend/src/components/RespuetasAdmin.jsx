import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { API_URL } from "../constante";

const Respuestas = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const [datosEncuesta, setDatosEncuesta] = useState({
    r1: 0,
    r2: 0,
    r3: 0,
    r4: 0,
    r5: 0,
    promedio: 0,
  });

  useEffect(() => {
    const mostrarEncuesta = async () => {
      try {
        const response = await fetch(`${API_URL}/consultar`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        });
        const data = await response.json();
        console.log(data.body.promedio);
        if (data.statusCode === 200) {
          setDatosEncuesta({
            r1: parseFloat(data.body.r1),
            r2: parseFloat(data.body.r2),
            r3: parseFloat(data.body.r3),
            r4: parseFloat(data.body.r4),
            r5: parseFloat(data.body.r5),
            promedio: parseFloat(data.body.promedio),
          });
        }
      } catch (error) {
        console.error("Error de red:", error);
      }
    };

    mostrarEncuesta();
  }, [id]);

  const data = [
    { name: "P1", uv: datosEncuesta.r1 },
    { name: "P2", uv: datosEncuesta.r2 },
    { name: "P3", uv: datosEncuesta.r3 },
    { name: "P4", uv: datosEncuesta.r4 },
    { name: "P5", uv: datosEncuesta.r5 },
    { name: "Promedio", uv: datosEncuesta.promedio },
  ];

  return (
    <div className="bg-slate-200 rounded-md">      
      <div className="p-6 relative">
      <h1 className="text-2xl font-bold">Reporte de la encuesta de validacion</h1>
        <div className=" border rounded-lg overflow-hidden shadow-md p-6 bg-white flex ">
          <div className="p-4 text-gray-600">
            <LineChart className="bg-gray-200" width={600} height={300} data={data}>
              <Line type="monotone" dataKey="uv" stroke="#5C6BC0" />
              <CartesianGrid stroke="#A5A5A5" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </div>
          <div className="mt-4">            
            <p >
              ¡Gracias por participar en nuestra encuesta sobre la calidad del
              aire! Tu opinión es invaluable para nosotros y nos ayudará a
              mejorar nuestros servicios. Apreciamos mucho tu tiempo y tus
              comentarios. ¡Gracias por contribuir a un aire más limpio y
              saludable para todos!
            </p>
            <p className="mt-8">
              La calificacion total es de : {datosEncuesta.promedio.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Respuestas;
