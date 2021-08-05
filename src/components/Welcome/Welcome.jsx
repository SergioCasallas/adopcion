import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/welcome.scss';

const Welcome = () => {
  return (
    <section className='welcome'>
      <h1 className='welcome__title'>Bienvenido</h1>
      <span className='welcome__phrase'>
        WOW!
        <br />
        Quieres Adoptar
      </span>

      <Link to='/selection' className='welcome__button'>
        Empezar
      </Link>
      <span className='welcome__shape welcome__shape-1'></span>
      <span className='welcome__shape welcome__shape-2'></span>
      <span className='welcome__shape welcome__shape-3'></span>
      <span className='welcome__shape welcome__shape-4'></span>
    </section>
  );
};

export default Welcome;
