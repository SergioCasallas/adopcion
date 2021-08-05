import React from 'react';

const CardAnimal = ({
  nombre,
  image,
  genero,
  tiempo,
  vacunas,
  enfermedades,
}) => {
//   const nombre = 'Dani';
//   const image = 'https://picsum.photos/300/300';
//   const genero = 'Masculino';
//   const tiempo = '5';
//   const vacunas = 'Si';
//   const enfermedades = 'calvicie';
  return (
    <div>
      <figure>
        <img src={image} alt='' />
      </figure>
      <span>{nombre}</span>
      <span>{genero}</span>
      <span>{tiempo}</span>
      <span>{vacunas}</span>
      <span>{enfermedades}</span>
    </div>
  );
};

export default CardAnimal;
