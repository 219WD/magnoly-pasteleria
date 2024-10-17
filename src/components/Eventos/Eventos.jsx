import React, { useRef, useEffect } from 'react';
import './Eventos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Asegúrate de registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Eventos = () => {
  const carouselRef = useRef(null);
  const imgEventosRef = useRef(null); // Referencia a la imagen

  // Arreglo de productos con sus respectivas imágenes y nombres
  const productos = [
    { img: '/src/assets/img-1.jpg' },
    { img: '/src/assets/img-2.jpg' },
    { img: '/src/assets/img-3.jpg' },
    { img: '/src/assets/img-4.jpg' },
    { img: '/src/assets/img-5.jpg' },
    { img: '/src/assets/img-6.jpg' },
    { img: '/src/assets/img-7.jpg' },
    { img: '/src/assets/img-8.jpg' },
    { img: '/src/assets/img-9.jpg' },
    { img: '/src/assets/img-10.jpg' },
    { img: '/src/assets/img-11.jpg' },
    { img: '/src/assets/img-12.jpg' },
    { img: '/src/assets/img-13.jpg' },
    { img: '/src/assets/img-14.jpg' },
  ];

  useEffect(() => {
    // Animación de la imagen y el título con ScrollTrigger
    gsap.fromTo(
      imgEventosRef.current,
      { scale: 0.9 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: imgEventosRef.current,
          start: 'top 80%',
          end: 'bottom bottom',
          scrub: true,
        },
        duration: 2,
        ease: 'power2.out',
      }
    );
  
    // SplitType para separar caracteres en el H1
    const split = new SplitType('.eventos-content-2 h1', {
      types: 'words, chars', // Divide por palabras y caracteres
    });
    
  
    // Timeline para animar el color del H1
    gsap.timeline({
      scrollTrigger: {
        trigger: '.eventos-content-2 h1',
        start: 'top 90%',
        end: 'bottom 50%',
        scrub: 0.5,
      },
    }).to(
      split.chars, 
      {
        color: '#62381b', 
        stagger: 0.2,
      },
      0.2
    );

        // SplitType para separar caracteres en el H1
        const split2 = new SplitType('.eventos-txt h1', {
          types: 'words, chars', // Divide por palabras y caracteres
        });
        
      
        // Timeline para animar el color del H1
        gsap.timeline({
          scrollTrigger: {
            trigger: '.eventos-txt h1',
            start: 'top 90%',
            end: 'bottom 50%',
            scrub: 0.5,
          },
        }).to(
          split2.chars, 
          {
            color: '#62381b', 
            stagger: 0.2,
          },
          0.2
        );


    let xPos = 0; // Posición inicial en 0
    const cardWidth = 300; // Ancho de cada tarjeta
    const totalWidth = cardWidth * productos.length; // Ancho total del carrusel
    const cards = carouselRef.current;

    // Clonamos los elementos al final del carrusel para simular un loop infinito
    const cloneCards = () => {
      const clone = [...cards.children].map((child) => child.cloneNode(true));
      clone.forEach((clonedChild) => cards.appendChild(clonedChild));
    };

    cloneCards(); // Clonamos las tarjetas para loop continuo

    // Mover el carrusel en la dirección dada
    const moveCarousel = (direction) => {
      if (direction === 'left') {
        xPos += cardWidth;
        if (xPos > 0) xPos = -(totalWidth); // Volver al final si se pasa del inicio
      } else {
        xPos -= cardWidth;
        if (xPos <= -(totalWidth)) {
          // Restablecer la posición sin que se note el salto
          xPos = 0;
          gsap.set(cards, { x: xPos });
          return;
        }
      }
      gsap.killTweensOf(cards); // Elimina animaciones previas
      gsap.to(cards, {
        x: xPos,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    };

    // Agregar eventos a los botones
    const handleLeftClick = () => moveCarousel('left');
    const handleRightClick = () => moveCarousel('right');

    document.getElementById('left').addEventListener('click', handleLeftClick);
    document.getElementById('right').addEventListener('click', handleRightClick);

    // Limpiar los eventos cuando el componente se desmonta
    return () => {
      document.getElementById('left').removeEventListener('click', handleLeftClick);
      document.getElementById('right').removeEventListener('click', handleRightClick);
    };
  }, [productos.length]);

  return (
    <div className='container-eventos' id="eventos">
      <div className="eventos-content-1">
        <div className="eventos-img" ref={imgEventosRef}>
          <div className="img-eventos-1"></div>
        </div>
        <div className="eventos-txt">
          <h1>Eventos</h1>
          <h2>Servicio de catering para eventos</h2>
          <p>Queremos acompañarte en cada ocasión especial y es por ello que te ofrecemos una excelente propuesta para cada ocasión que desees celebrar. Conocé todas nuestras sugerencias tanto para eventos como para regalar.</p>
          <button>Contacto</button>
        </div>
      </div>
      <div className="eventos-content-2">
        <h1>Conoce nuestra carta y pedi</h1>
        <h2>Puedes elegir la combinación que más te guste</h2>
        <p>Queremos acompañarte en cada ocasión especial y es por ello que te ofrecemos una excelente propuesta para cada ocasión que desees celebrar.</p>
        <div className="carousel-wrapper">
          <i className="left-arrow" id="left">&lt;</i>
          <ul className="carousel" ref={carouselRef}>
            {productos.map((producto, index) => (
              <li className="card" key={index}>
                <div className="img">
                  <img src={producto.img} />
                </div>
              </li>
            ))}
          </ul>
          <i className="right-arrow" id="right">&gt;</i>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
