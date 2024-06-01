import logo from "../assets/calidad-del-aire.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-2  mx-auto text-white w-full  bottom-0 ">
      <div className="my-8 flex flex-col md:flex-row gpa-10">
        <a
          href=""
          className="text-2xl font-semibold flex items-center space-x-3 text-primario"
        >
          <img src={logo} alt="" className="w-20 inline-block items-center" />
        </a>
        <div className="md: w-1/2 space-y-2 mx-6">
          <p className="md: w-1/2 text-slate-300  ">
            SISTEMA DE MONITOREO DE LA CALIDAD DEL AIRE
          </p>
          <p className="md: w-1/2 text-slate-300">
            Universidad Distrital Francisco José de Caldas
          </p>
          <p className="md: w-1/2 text-slate-300">
            Grupo de investigación METIS
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-3 text-slate-300">
            <h4 className="text-xl">Navegacion</h4>
            <ul>
              <a href="" className="hover:text-white">
                Descripcion del proyecto
              </a>
              <a href="" className="mx-4 hover:text-white">
                integrantes
              </a>
              <a href="" className="mx-4 hover:text-white">
                Validacion
              </a>
              <a href="" className="mx-4 hover:text-white">
                Acerca de nosotros
              </a>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className=" flex flex-col sm:flex-row gap-4 sm:items-center justify-between my-0 text-slate-300">
        <p>@ Calidad del aire 2024---2024. All rights reserved.</p>
        <div className=" flex items-center sapace-x-5">
            <a href="https://www.facebook.com/ComunicacionesFacultadTecnologica" target="_blank"><FaFacebookSquare className=" text-3xl cursor-pointer hover:-translate-y-4 transition-all duration-300 "/></a>
            <a href="https://www.instagram.com/udistrital_oficial/" target="_blank"><FiInstagram className=" text-3xl mx-3 cursor-pointer hover:-translate-y-4 transition-all duration-300"/></a>
            <a href="https://twitter.com/udistrital" target="_blank"><FaXTwitter className=" text-3xl cursor-pointer hover:-translate-y-4 transition-all duration-300"/></a>            
        </div>
      </div>
    </div>
  );
};

export default Footer;
