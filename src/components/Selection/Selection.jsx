import React from 'react';
import Json from '../../json/prueba.json';
import Card from '../Card/Card';
import '../../scss/components/Selection.scss';

const Selection = () => {
  // const json = Json.json();
  // console.log(Json.data[0].especie);
  // console.log(Json.data[0].imageEspecie);
  return (
    <section className='selection'>
      <h1 className='selection__title'>Select </h1>
      <article className='selection__items'>
        {Json.data.map((item, index) => {
         return  <Card key={item.especie} image={item.imageEspecie} name={item.especie} />
        })}
      </article>
    </section>
  );
};

export default Selection;
