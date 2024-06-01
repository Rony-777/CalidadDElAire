import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Recursos from "./components/Recursos";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import imgContaminante from "./assets/contaminantes.jpg";
import imgSalud from "./assets/salud.jpeg";
import imgAmbiente from "./assets/ambiente.jpg";
import imgTecnico from "./assets/tecnico.png";
import imgBogota from "./assets/bogota.jpeg";
import Validacion from "./components/Validacion";
import Encuesta from "./components/Encuesta";
import { useEffect, useState } from "react";
import Respuetas from "./components/Respuetas";
import RespuetasAdmin from "./components/RespuetasAdmin";
import Registrar from "./components/Registrar";
import Login from "./components/Login";
import Info from "./components/Info";

function App() {
  useEffect(() => {
    document.title = "SM Clidad del aire";
  }, []); // Este efecto se ejecuta una vez, cuando el componente se monta
  
  

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/recursos"
            element={
              <Layout>
                <Recursos imageSrc={imgContaminante} title={'Tipos de contaminante'} URL={'https://www.metropol.gov.co/ambiental/calidad-del-aire/paginas/generalidades/principales-contaminantes.aspx'} description={'Aquellas personas que viven en las ciudades respiran aire con partículas suspendidas que se pueden presentar de diferentes formas, como humo, polvo, cenizas, hollín, polen, aerosoles, compuestos principalmente por sulfatos, nitratos, amoníaco, cloruro sódico, carbón, polvo de minerales, cenizas metálicas y agua.'} />
                <Recursos imageSrc={imgSalud} title={'Problemas en la salud'} URL={'https://www.niehs.nih.gov/health/topics/enfermedades/contaminacion'} description={'La contaminación del aire es un peligro ambiental conocido para la salud. Sabemos lo que vemos cuando una neblina marrón se asienta sobre una ciudad, los gases de caños de escape se acumulan por una carretera transitada o una columna de humo se eleva desde una chimenea. A veces, la contaminación del aire no se ve, pero su olor penetrante sirve de alerta.'} />
                <Recursos imageSrc={imgAmbiente} title={'Efectos de la contaminacion del aire'} URL={'https://infoaireperu.minam.gob.pe/efectos-de-la-contaminacion-del-aire/#:~:text=La%20acumulaci%C3%B3n%20de%20gases%20en,global%2C%20efecto%20invernadero%2C%20etc.'} description={'La contaminación del aire afecta a todos y a todos los sectores: animales, culturas, ciudades, bosques, ecosistemas acuáticos … En los últimos años, sin embargo, se ha interesado ​​en dos áreas en particular, que sufren muchas consecuencias adversas de la contaminación del aire: el medio ambiente y la salud humana.'} />
                <Recursos imageSrc={imgTecnico} title={'¿Cómo se mide la calidad del aire?'} URL={'https://www.unep.org/es/noticias-y-reportajes/reportajes/como-se-mide-la-calidad-del-aire'} description={'Entre los contaminantes vinculados a los efectos sobre la salud humana y el medio ambiente figuran el MP2,5, el MP10, el ozono troposférico, el dióxido de nitrógeno y el dióxido de azufre. Cuanto mayor sea la densidad de contaminantes en el aire, mayor será el Índice de Calidad del Aire (ICA), una escala que va de 0 a 500. Un ICA de 50 o menos se considera seguro, mientras que las lecturas por encima de 100 se consideran poco saludables. Según la iniciativa IQAir, asociada del PNUMA, solo 38 de 117 países y regiones obtuvieron lecturas con un promedio saludable del Índice de Calidad del Aire en 2021.'} />
                <Recursos imageSrc={imgBogota} title={'Alcaldía de Bogotá levantó alerta por calidad del aire'} URL={'https://www.infobae.com/colombia/2024/03/27/alcaldia-de-bogota-levanto-alerta-por-calidad-del-aire-en-la-capital/'} description={'En la tarde del miércoles 27 de marzo de 2024, la Alcaldía de Bogotá confirmó que se levanta la alerta Fase I por calidad del aire en la capital, dado que las estaciones han registrado mejoría en las últimas 36 horas.'} />
              </Layout>
            }
          />
          <Route
            path="/infoProyecto"
            element={
              <Layout>
                <Info/>
              </Layout>
            }
          />
          <Route
            path="/validacion"
            element={
              <Layout>
                <Validacion />
              </Layout>
            }
          />
          <Route
            path="/encuesta"
            element={
              <Layout>
                <Encuesta />
              </Layout>
            }
          />
          <Route
            path="/respuestas"
            element={
              <Layout>
                <Respuetas />
              </Layout>
            }
          />
          <Route
            path="/respuestas-admin"
            element={
              <Layout>
                <RespuetasAdmin />
              </Layout>
            }
          />
          <Route
            path="/registrar"
            element={
              <Layout>
                <Registrar />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
