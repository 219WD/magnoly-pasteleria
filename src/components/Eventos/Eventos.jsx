import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import './Eventos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Asegúrate de registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Eventos = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5493815556840&text=Hola,%20quiero%20contratar%20Su%20Servicio.&type=phone_number&app_absent=0";
  const imgEventosRef = useRef(null); // Referencia a la imagen

  // Arreglo de productos con sus respectivas imágenes y nombres
  const productos = [
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196866/img-1_hxeetx.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196866/img-2_rc6oug.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196868/img-3_vueyqo.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196869/img-4_entn8k.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196865/img-5_mesieu.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196869/img-6_bp8sgd.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196872/img-7_lfh7uo.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196871/img-8_z6sldh.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196879/img-9_bkqjlp.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196879/img-10_oat6d4.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196873/img-11_cne98m.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196880/img-12_dasutv.jpg', nombre: 'Mesa dulce' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196877/img-13_evzfgh.jpg', nombre: 'Torta' },
    { img: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1729196878/img-14_xcpu4q.jpg', nombre: 'Tarta' },
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
  }, []);

  return (
    <div className='container-eventos' id="eventos">
      <div className="eventos-content-1">
        <div className="eventos-img" ref={imgEventosRef}>
          <div className="img-eventos-1"></div>
        </div>
        <div className="eventos-txt">
          <h1>Eventos</h1>
          <h2>El toque <strong>dulce y perfecto</strong> para tus eventos</h2>
          <p>Mini Bocaditos para <strong>mesas dulces</strong>, variedad y sabor.
          <strong>Tortas personalizadas</strong> con diseño y calidad para <strong>cumpleaños, bodas, baby showers</strong> y más.
          ¡Pedí tu presupuesto y deja que <strong>nos encarguemos de lo dulce</strong>!</p>
          <a href={whatsappLink} className='button'>contacto</a>
        </div>
      </div>
      <div className="eventos-content-2">
        <h1>Conoce <strong>nuestros productos</strong></h1>
        <h2>¡Hacé tu pedido!</h2>
        <p>Descubre nuestra variedad de <strong>tartas, tortas, alfajorcitos</strong> y mas en nuestra carta o contáctanos para personalizar tu pedido.</p>
        <div className="carousel-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={16}
            slidesPerView={2} // Mostrar 4 slides por vista en pantallas grandes
            breakpoints={{
              640: { slidesPerView: 1 },  // 1 slide en pantallas pequeñas
              768: { slidesPerView: 2 },  // 2 slides en pantallas medianas
              1024: { slidesPerView: 3 }, // 3 slides en pantallas más grandes
              1440: { slidesPerView: 4 }, // 4 slides en pantallas grandes
            }}
          >
            {productos.map((producto, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <div className="img">
                    <img src={producto.img} alt={producto.nombre} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
