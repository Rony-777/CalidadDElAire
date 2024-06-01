import React, {useContext} from "react";
import homeImg from "../assets/home.jpg";
import { RiSeparator } from "react-icons/ri";
import { MyContext } from "../context/Context";

const Home = () => {
  const contexto= useContext(MyContext);  
  return (
    <div className="relative mx-auto mt-0 "> 
    <h1>{contexto.data}</h1>     
      <div className="relative">
        <img src={homeImg} alt="" className="w-full h-[840px] opacity-[0.70]" />
        {/* Texto superpuesto */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-6xl font-bold">Bienvenido</h1>
          <RiSeparator className="mx-auto text-6xl text-secundario" />
          <h1 className="text-4xl font-bold">
            Sistema de monitoreo de la calidad del aire.
          </h1>
          <button className="bg-secundario text-black font-bold mt-6 py-2 px-12 transition-all duration-300 rounded-lg hover:text-white hover:bg-indigo-500">
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
