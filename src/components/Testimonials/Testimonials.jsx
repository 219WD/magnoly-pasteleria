import React, { useRef, useEffect } from 'react';
import './Testimonials.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsCarouselRef = useRef(null);

  const testimonialsData = [
    { stars: 5, text: 'Hola Daniela como estas? No queria pasar por alto y dejar de felicitarte por lo que que salio todo! ❤ Muchas gracias por todo!💐' },
    { stars: 4, text: 'Hola como estas te queria comentar que muy rico todo!! Me encanto y a los invitados tambien.' },
    { stars: 5, text: 'Muy rico la verdad Dani todo lo que haces, te recomende a mi compa y tambien te encargo y todo fue riquisimo esta encantado.' },
    { stars: 3, text: 'Muy rico todo. A la gente le encanto.' },
    { stars: 5, text: 'Solo para agradecerte el impecable trabajo que realizas. Ya se que puedo contar contigo en cualquier evento. Muchisimas gracias!' },
    { stars: 4, text: 'Se devoraron la mesa dulce, yo no llegue a probar nadaaa jaja pero me contaron que todo estaba riquisimo.' },
  ];

  useEffect(() => {
    // Animación de split con ScrollTrigger para el título
    const split = new SplitType('.testimonials-new-content h1', {
      types: 'words, chars',
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.testimonials-new-content h1',
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

    let xPos = 0;
    const cardWidth = 300;
    const totalWidth = cardWidth * testimonialsData.length;
    const cards = testimonialsCarouselRef.current;

    const cloneTestimonials = () => {
      const clone = [...cards.children].map((child) => child.cloneNode(true));
      clone.forEach((clonedChild) => cards.appendChild(clonedChild));
    };

    cloneTestimonials();

    const moveTestimonialsCarousel = () => {
      xPos -= cardWidth;
      if (xPos <= -(totalWidth)) {
        xPos = 0;
        gsap.set(cards, { x: xPos });
        return;
      }
      gsap.killTweensOf(cards);
      gsap.to(cards, {
        x: xPos,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    };

    const autoPlay = setInterval(() => {
      moveTestimonialsCarousel();
    }, 3000);

    return () => {
      clearInterval(autoPlay);
    };
  }, [testimonialsData.length]);

  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const starElements = [];
    for (let i = 0; i < fullStars; i++) {
      starElements.push(<i key={i} className="fas fa-star"></i>);
    }
    return starElements;
  };

  return (
    <div className='testimonials-container' id="testimonios">
      <div className="testimonials-new-content">
        <h1>Nuestros Clientes</h1>
        <h2>Sus testimonios nos importan</h2>
        <div className="carousel-new-wrapper">
          <ul className="testimonials-carousel" ref={testimonialsCarouselRef}>
            {testimonialsData.map((testimonio, index) => (
              <li className="testimonials-card" key={index}>
                <div className="testimonials-stars">
                  {renderStars(testimonio.stars)}
                </div>
                <p>{testimonio.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
