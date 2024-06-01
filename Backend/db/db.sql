\c postgres
DROP DATABASE If EXISTS agenciadeviaje ;
CREATE DATABASE agenciadeviaje;
\c agenciadeviaje

CREATE TABLE usuario(
    id serial NOT NULL,
    nombre varchar(50) NOT NULL,
    username varchar(50) NOT NULL,
    password varchar(200) NOT NULL,
    email varchar(200) NOT NULL,
    PRIMARY KEY (id)
);

