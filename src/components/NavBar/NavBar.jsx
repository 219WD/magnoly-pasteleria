import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { gsap } from 'gsap'; 
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // Importar el plugin
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollToPlugin); // Registrar el plugin

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const logo = document.querySelector('.logo img');
    const menuItems = document.querySelectorAll('nav ul li');
    const navBar = document.getElementById('navBar');

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'power3.inOut',
      },
    });

    tl.fromTo(logo, { y: -50, opacity: 0 }, { y: 0, opacity: 1, delay: 0.1 });
    tl.fromTo(menuItems, { y: -50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3, delay: 0.1 });

    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        gsap.to(navBar, { duration: 1, y: -200 });
      } else {
        gsap.to(navBar, { duration: 1, y: 0 });
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      tl.kill();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!isOpen) {
      gsap.to(mobileMenu, { height: '100vh', duration: 1.5, ease: 'power3.inOut' });
      const mobileMenuItems = mobileMenu.querySelectorAll('ul li');

      // Animación escalonada para los elementos del menú móvil
      const tl = gsap.timeline();
      tl.fromTo(mobileMenuItems, { y: -50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3, delay: 0.5 });
    } else {
      gsap.to(mobileMenu, { height: '0', duration: 1.5, ease: 'power3.inOut' });
    }
  };

  const handleLinkClick = (e) => {
    e.preventDefault(); 
    setIsOpen(false);
    gsap.to('.mobile-menu', { height: '0', duration: 1, ease: 'power3.inOut' }); 

    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        scrollTo: {
          y: target.offsetTop,
          autoKill: true 
        },
        duration: 1.5,
        ease: 'power3.inOut'
      });
    }
  };

  return (
    <nav id="navBar">
      <div className="logo">
        <img src="https://res.cloudinary.com/dtxdv136u/image/upload/v1729196888/logo_atnzta.png" alt="Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#sobre-mi" onClick={handleLinkClick}>Sobre mí</a></li>
        <li><a href="#eventos" onClick={handleLinkClick}>Eventos</a></li>
        <li><a href="#testimonios" onClick={handleLinkClick}>Testimonios</a></li>
        <li><a href="#contacto" onClick={handleLinkClick}>Contacto</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
      <div className="mobile-menu">
        <ul>
          <li><a href="#sobre-mi" onClick={handleLinkClick}>Sobre mí</a></li>
          <li><a href="#eventos" onClick={handleLinkClick}>Eventos</a></li>
          <li><a href="#testimonios" onClick={handleLinkClick}>Testimonios</a></li>
          <li><a href="#contacto" onClick={handleLinkClick}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
