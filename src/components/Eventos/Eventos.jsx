import React, { useRef, useEffect } from 'react';
import './Eventos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Asegúrate de registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Eventos = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5493815556840&text=Hola,%20quiero%20contratar%20Su%20Servicio.&type=phone_number&app_absent=0";
  const carouselRef = useRef(null);
  const imgEventosRef = useRef(null); // Referencia a la imagen

  // Arreglo de productos con sus respectivas imágenes y nombres
  const productos = [
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196866/img-1_hxeetx.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196866/img-2_rc6oug.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196868/img-3_vueyqo.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196869/img-4_entn8k.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196865/img-5_mesieu.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196869/img-6_bp8sgd.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196872/img-7_lfh7uo.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196871/img-8_z6sldh.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196879/img-9_bkqjlp.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196879/img-10_oat6d4.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196873/img-11_cne98m.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196880/img-12_dasutv.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196877/img-13_evzfgh.jpg' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196878/img-14_xcpu4q.jpg' },
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
          <h2>El toque dulce y perfecto para tus eventos</h2>
          <p>Mini Bocaditos para mesas dulces, variedad y sabor.
          Tortas personalizadas con diseño y calidad para cumpleaños, bodas, baby showers y más.
          ¡Pedí tu presupuesto y deja que nos encarguemos de lo dulce!</p>
          <a href={whatsappLink} className='button'>contacto</a>
        </div>
      </div>
      <div className="eventos-content-2">
        <h1>Conoce nuestros productos</h1>
        <h2>¡Hacé tu pedido!</h2>
        <p>Descubre nuestra variedad de tartas, tortas, alfajorcitos y mas en nuestra carta o contáctanos para personalizar tu pedido.</p>
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
