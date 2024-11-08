// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Купуйте нові картриджі для Nintendo Switch!</h1>
        <p>Найпопулярніші ігри за найкращими цінами.</p>
        <li>
          <Link to = '/catalog' className='btn'>Переглянути каталог</Link>
        </li>
        
        <a href="#" className="btn">Купити зараз</a>
      </div>
    </section>
  );
};

export default Hero;
