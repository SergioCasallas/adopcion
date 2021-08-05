import React from 'react';
import { useParams } from 'react-router';
import CardAnimal from '../CardAnimal/CardAnimal';

const Animal = ({ datosApi }) => {
  const { name } = useParams();
  return (
    <div>
      <h1>{name}</h1>
      {datosApi.data.map((item) =>
        item.especie === name
          ? item.cantidad.map((item) => (
              <CardAnimal
                key={item.nombre}
                nombre={item.nombre}
                genero={item.genero}
                tiempo={item.tiempo}
                vacunas={item.vacunas}
                enfermedades={item.enfermedades}
                image={item.image}
              />
            ))
          : null
      )}
    </div>
  );
};

export default Animal;
