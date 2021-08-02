import React from 'react';
// import Image from '../../assets/images/flamingo-6385008_1920.jpg';
import '../../scss/components/Card.scss';

const Card = ({ image, name }) => {
  // const name = 'flamingo';
  // image.on('load', console.log('cargando'));

  return (
    <div className='card'>
      <figure className='card__content-images'>
        {image ? (
          <img className='card__image' src={image} alt='animal' />
        ) : (
          console.log('esperando')
        )}
      </figure>
      <span className='card__name'>{name}</span>
    </div>
  );
};

export default Card;
