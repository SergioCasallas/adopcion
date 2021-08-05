import React from 'react';
// import Image from '../../assets/images/flamingo-6385008_1920.jpg';
import '../../scss/components/Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ image, name }) => {
  // const name = 'flamingo';
  // image.on('load', console.log('cargando'));

  return (
    <div className='card'>
      <Link className='card__link' to={`/animals/${name}`}>
        <figure className='card__content-images'>
          {image ? (
            <img
              className='card__image'
              src={image}
              alt='animal'
              loading='eager'
            />
          ) : (
            console.log('esperando')
          )}
        </figure>
        <span className='card__name'>{name}</span>
      </Link>
    </div>
  );
};

export default Card;
