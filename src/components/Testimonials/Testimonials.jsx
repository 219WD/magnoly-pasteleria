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
    { stars: 5, name: 'Pepe Argento', text: 'Excelente servicio.' },
    { stars: 4, name: 'Charly Garcia', text: 'Recomendado 100%.' },
    { stars: 5, name: 'Marcelo Gallardo', text: 'Muy profesional y atento.' },
    { stars: 3, name: 'Mariela Martinez', text: 'Sin duda volvería a contratar.' },
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
                <h3>{testimonio.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
