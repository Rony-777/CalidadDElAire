import React from "react";
import ronald from "../assets/jefe.png";
import jhon from "../assets/avatar.png";
import ud from "../assets/ud.jpeg";
import MQ135 from "../assets/MQ135.jpg";
import GP2Y1010AU0F from "../assets/GP2Y1010AU0F.jpeg";
import DHT22 from "../assets/DHT22.jpg";

const Info = () => {
  return (
    <div className="bg-slate-200 rounded-md">
      <div className="p-6 relative">
        <div className="bg-white border rounded-lg shadow-md p-6">
          <h1 className="text-3xl mx-12">Equipo</h1>
          <div className="flex  overflow-hidden   ">
            {/* Columna de la imagen */}
            <div className="flex-shrink-0 w-[50%] items-center justify-center">
              <br />
              <img
                src={ronald}
                alt=""
                className="h-40 rounded-lg  object-cover mx-auto"
              />
              <p className="text-center text-slate-800 text-2xl">
                Desarrollador - Ronald Caipa López
              </p>
              <p className="text-center text-slate-800 text-lg">
                Email: recaipal@udistrical.edu.co
              </p>
            </div>
            {/* Columna del texto */}
            <div className="flex-shrink-0 w-[50%] items-center justify-center">
              <br />
              <img
                src={jhon}
                alt=""
                className="h-40 rounded-lg  object-cover mx-auto"
              />
              <p className="text-center text-slate-800 text-2xl">
                Aguatero izquierdo - Jhon Durango Rodriguez{" "}
              </p>
              <p className="text-center text-slate-800 text-lg">
                Email: jmdurangor@udistrical.edu.co
              </p>
            </div>
          </div>
          <div className=" my-12">
            <hr className="border-indigo-400 border-t-2" />
            <h1 className="text-3xl mx-12 my-4">
              Sistema de Monitoreo de Calidad del Aire en la Facultad
              Tecnológica
            </h1>
            <p className="mx-12 my-4">
              Este sistema de monitoreo se enfoca en recopilar datos en tiempo
              real sobre diversos parámetros relacionados con la calidad del
              aire, como la concentración de contaminantes atmosféricos, la
              humedad, la temperatura y otros factores relevantes. Utilizando
              una variedad de sensores y dispositivos de medición avanzados, el
              sistema es capaz de proporcionar información precisa y detallada
              sobre la calidad del aire en diferentes áreas y niveles de la
              facultad.
            </p>
            <img
              src={ud}
              alt=""
              className="mx-auto w-[800px] h-[400px] opacity-85 rounded-lg"
            />
          </div>
          <div className=" my-12">
            <h1 className="text-3xl mx-12 my-4">Objetivos</h1>
            <p className="mx-12 my-4">
              <strong className="font-bold">
                Garantizar un Ambiente Saludable:
              </strong>{" "}
              El principal objetivo del proyecto es implementar un sistema de
              monitoreo de calidad del aire que asegure un ambiente interior
              saludable y seguro para los estudiantes, profesores y personal de
              la Facultad Tecnológica. Esto se logrará mediante la detección
              temprana de niveles inaceptables de contaminantes atmosféricos y
              la adopción de medidas preventivas y correctivas adecuadas.
            </p>
            <p className="mx-12 my-4">
              <strong className="font-bold">
                Promover la Conciencia Ambiental:
              </strong>{" "}
              El proyecto busca promover la conciencia ambiental dentro de la
              comunidad universitaria al proporcionar información detallada y
              transparente sobre la calidad del aire en las instalaciones. Al
              aumentar la conciencia sobre los efectos de la contaminación del
              aire en la salud humana y el medio ambiente, se fomenta una
              cultura de responsabilidad y cuidado ambiental entre los
              estudiantes, profesores y personal.
            </p>
            <p className="mx-12 my-4">
              <strong className="font-bold">
                Optimizar la Gestión de Recursos:
              </strong>{" "}
              Optimizar la Gestión de Recursos: El sistema de monitoreo
              permitirá una gestión más eficiente de los recursos al identificar
              áreas de mejora en relación con la calidad del aire. Esto incluye
              la optimización de sistemas de ventilación, la implementación de
              prácticas de limpieza adecuadas y la adopción de políticas que
              reduzcan la emisión de contaminantes en el interior de las
              instalaciones. Al mejorar la calidad del aire, se pueden minimizar
              los riesgos para la salud y se pueden lograr ahorros a largo plazo
              en costos asociados con problemas de salud y bienestar.
            </p>
          </div>
          <div className=" my-12">
            <hr className="border-indigo-400 border-t-2" />
            <h1 className="text-3xl mx-12 my-4">¿Comó se hizo?</h1>
            <p className="mx-12 my-4">
              La aplicación de monitoreo de calidad del aire en la Facultad
              Tecnológica de la Universidad Francisco José de Caldas se
              construyó utilizando un enfoque ágil y tecnologías modernas como
              React para el front-end, Node.js para el back-end, Tailwind CSS
              para el diseño y PostgreSQL para la base de datos. El proceso de
              desarrollo involucró iteraciones cortas, colaboración estrecha con
              los usuarios finales y despliegue continuo con énfasis en la
              seguridad y el rendimiento. Mantenimiento proactivo y pruebas
              continuas aseguran su funcionamiento óptimo y su adaptabilidad a
              largo plazo.
            </p>
            
            <div className="flex mx-12 my-12">                
                <img src={MQ135} alt="" className=" w-[300px]"/>
                <p className="mx-12 my-auto"> <h1 className="my-4 text-xl">Sensor MQ135</h1>El módulo es usado generalmente para el monitoreo, detección e informe de calidad del aire y detección de gases peligrosos como Amoníaco (NH3), Óxidos de nitrógeno (NOx), Alcohol, Sulfuros, Benceno (C6H6), Monóxido de carbono (CO), humo y otros gases nocivos con un alcance de detección, de respuesta rápida, alta sensibilidad y estabilidad.</p>
            </div>
            
            <div className="flex mx-12 my-12">                                
                <p className="my-auto"> <h1 className=" my-4 text-xl">Sensor GP2Y1010AU0F</h1>El sensor Sharp permite medir de forma sencilla la concentración de polvo en el aire. Integra un diodo infrarrojo y un fototransistor en un arreglo diagonal, que permiten medir la luz reflejada por las partículas de polvo en el aire </p>
                <img src={GP2Y1010AU0F} alt="" className="mx-12 my-auto w-[300px]"/>
            </div>

            <div className="flex mx-12 my-12">                
                <img src={DHT22} alt="" className=" w-[300px]"/>
                <p className="mx-12 my-auto"> <h1 className="my-4 text-xl">Sensor DHT22</h1>Sensor de Temperatura y humedad Serial para aplicaciones en equipos de medición, automóviles, reguladores de humedad, equipos meteorológicos, electrodomésticos, cuartos de control, etc..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
