import React, { useEffect } from 'react';
import './About.css';
import Dani from '../../assets/IMG-20240717-WA0023.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Animación con ScrollTrigger para la imagen
    gsap.fromTo(
      '.img-about',
      {
        scale: 0.9, // Empieza más pequeña (90% del tamaño original)
      },
      {
        scale: 1, // Llega al tamaño original
        scrollTrigger: {
          trigger: '.about-img', // El contenedor de la imagen activa la animación
          start: 'top 80%', // Inicia la animación cuando el top del contenedor está al 80% del viewport
          end: 'bottom bottom', // Finaliza cuando el top del contenedor alcanza el 30%
          scrub: true, // La animación se vincula al scroll
        },
        duration: 2, // Duración de la animación
        ease: 'power2.out', // Suavizado de la animación
      }
    );

        // SplitType para separar caracteres en el H1
        const split = new SplitType('.about-txt h1', {
            types: 'words, chars', // Divide por palabras y caracteres
          });
      
          // Timeline para animar el color del H1
          gsap.timeline({
            scrollTrigger: {
              trigger: '.about-txt h1',
              start: 'top 90%',
              end: 'bottom 50%',
              scrub: 0.5, // Hace que la animación esté vinculada al scroll
            },
          }).to(
            split.chars, // Aplica a los caracteres separados
            {
              color: '#62381b', // Cambia el color a naranja
              stagger: 0.2, // Efecto escalonado en los caracteres
            },
            0.1
          );
  }, []);

  return (
    <div className="container-about" id="sobre-mi">
      <div className="about-txt">
        <h1>Dani <br /> Paez</h1>
        <p>
          Queremos acompañarte en cada ocasión especial y es por ello que te ofrecemos
          una excelente propuesta para cada ocasión que desees celebrar. Queremos
          acompañarte en cada ocasión especial y es por ello que te ofrecemos una
          excelente propuesta para cada ocasión que desees celebrar. Conocé todas
          nuestras sugerencias tanto para eventos como para regalar. Conocé todas
          nuestras sugerencias tanto para eventos como para regalar.
        </p>
      </div>
      <div className="about-img">
        <img src={Dani} alt="torta" className="img-about" />
      </div>
    </div>
  );
};

export default About;
