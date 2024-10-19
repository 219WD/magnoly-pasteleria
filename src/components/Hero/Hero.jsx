import React, { useEffect } from 'react';
import './Hero.css';
import { gsap } from 'gsap';

const Hero = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5493815556840&text=Hola,%20quiero%20contratar%20Su%20Servicio.&type=phone_number&app_absent=0";
  useEffect(() => {
    // Animar el clip-path para el título
    gsap.to(".hero-txt .title", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Revela el texto desde abajo hacia arriba
      duration: 1.5,
      ease: "power3.inOut",
      delay: 0.5, // Retraso para mejorar la experiencia visual
    });

    gsap.to(".hero-txt h2", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Revela el texto desde abajo hacia arriba
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.7, // Retraso para mejorar la experiencia visual
      });

      gsap.to(".hero-txt p", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Revela el texto desde abajo hacia arriba
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.9, // Retraso para mejorar la experiencia visual
      });

      gsap.to(".hero-txt .button", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Revela el texto desde abajo hacia arriba
        duration: 1.5,
        ease: "power3.inOut",
        delay: 1, // Retraso para mejorar la experiencia visual
      });

      gsap.to(".hero-img .img-hero", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Revela la imagen de izquierda a derecha
        duration: 1.5,
        ease: "power3.inOut",
        delay: 1.2, // Retraso para mejorar la experiencia visual
      });      

    // Limpieza de la animación
    return () => {
      gsap.killTweensOf(".hero-txt .title");
    };
  }, []);

  return (
    <div className='container'>
      <div className="hero-txt">
        <h1 className="title">Magnoly <br /> Pasteleria</h1>
        <h2>Todo sale rico si se hace con amor</h2>
        <p>Bienvenidos a <strong>Magnoly Pastelería</strong>, donde cada bocado es un trabajo hecho con <strong>mucho amor y dedicación</strong>. </p>
        <a href={whatsappLink} className='button'>contacto</a>
      </div>
      <div className="hero-img">
        <img src="https://res.cloudinary.com/dtxdv136u/image/upload/v1729196894/torta_m5xm3g.png" alt="Torta" className="img-hero" />
      </div>
    </div>
  );
};

export default Hero;
