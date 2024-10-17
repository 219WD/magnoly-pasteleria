import React, { useEffect } from 'react';
import './homeScreen.css';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Eventos from '../components/Eventos/Eventos';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const HomeScreen = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // Sincronizar Lenis con ScrollTrigger de GSAP
    lenis.on('scroll', ScrollTrigger.update);

    // Agregar el raf de Lenis al ticker de GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Asegura que Lenis se ejecute con GSAP
    });

    gsap.ticker.lagSmoothing(0); // Desactivar la suavización del lag

    // Limpiar al desmontar el componente
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy(); // Destruir la instancia de Lenis
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Eventos />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomeScreen;
