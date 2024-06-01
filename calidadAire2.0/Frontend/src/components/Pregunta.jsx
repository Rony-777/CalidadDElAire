import React from "react";

const Pregunta = (props) => {
  return (
    <div>
      <p> {props.enunciado}</p>
      <input type="radio" id={`${props.nombre}1`} name={props.nombre} value="1" required />
      <label htmlFor={`${props.nombre}1`}>{props.res1}</label>
      <br />
      <input type="radio" id={`${props.nombre}2`} name={props.nombre} value="2" />
      <label htmlFor={`${props.nombre}2`}>{props.res2}</label>
      <br />
      <input type="radio" id={`${props.nombre}3`} name={props.nombre} value="3" />
      <label htmlFor={`${props.nombre}3`}>{props.res3}</label>
      <br />
      <input type="radio" id={`${props.nombre}4`} name={props.nombre} value="4" />
      <label htmlFor={`${props.nombre}4`}>{props.res4}</label>
      <br />
      <input type="radio" id={`${props.nombre}5`} name={props.nombre} value="5" />
      <label htmlFor={`${props.nombre}5`}>{props.res5}</label>      
    </div>
  );
};

export default Pregunta;
