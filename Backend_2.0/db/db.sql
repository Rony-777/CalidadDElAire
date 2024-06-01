\c postgres
DROP DATABASE If EXISTS calidad_aire;
CREATE DATABASE calidad_aire;
\c calidad_aire

CREATE TABLE usuario(
    id serial NOT NULL,
    nombre varchar(50) ,
    username varchar(50) ,
    password varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE encuesta(
    id serial,
    p1 INT,
    p2 INT,
    p3 INT,
    p4 INT,
    p5 INT,
    promedio REAL,
    correo VARCHAR (255),
    nombre VARCHAR (255),
    PRIMARY KEY (id)
);