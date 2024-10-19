import React, { useRef, useEffect } from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const formRef = useRef(null); // Creamos una referencia al formulario

    useEffect(() => {
        const form = formRef.current; // Accedemos al formulario usando la referencia

        if (form) {
            const handleSubmit = (e) => {
                e.preventDefault();
                const nombre = document.getElementById('nombre').value;
                const email = document.getElementById('email').value;
                const telefono = document.getElementById('telefono').value;
                const mensaje = document.getElementById('mensaje').value;
                guardarContacto(nombre, email, telefono, mensaje);
            };

            form.addEventListener('submit', handleSubmit); // Añadimos el listener

            return () => {
                form.removeEventListener('submit', handleSubmit); // Limpiamos el listener al desmontar el componente
            };
        }
    }, []);

    function guardarContacto(nombre, email, telefono, mensaje) {
        fetch(`https://docs.google.com/forms/d/e/1FAIpQLSe-kWgIGDBsHIYixffl8vBsQXGD843BO7PmMzbDIhlfV2LCew/formResponse?submit=Submit&usp=pp_url&entry.117591493=${nombre}&entry.862839739=${email}&entry.277956373=${telefono}&entry.894080341=${mensaje}`, {
            mode: 'no-cors'
        })
            .then(() => {
                alert('Contacto Guardado!');
                // Limpiar el formulario
                formRef.current.reset();
            })
            .catch(() => {
                alert('Error al guardar el contacto.');
            });
    }

    const whatsappLink = "https://api.whatsapp.com/send/?phone=5493815556840&text=Hola,%20quiero%20contratar%20Su%20Servicio.&type=phone_number&app_absent=0";

    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5690452344775!2d-65.23495847381113!3d-26.821847480373844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c5c3e43bbc3%3A0xc1b3d5a12cc339e1!2sPcia%20de%20Mendoza%202300%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1729100137795!5m2!1ses-419!2sar"
                style={{ width: '100vw', height: '50vh', border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <footer className='container-footer'>
                <div className="logo-section">
                    <img src="https://res.cloudinary.com/dtxdv136u/image/upload/v1729196888/logo_atnzta.png" alt="Logo" className="footer-logo" />
                    <h2>Todo sale rico si se hace con amor</h2>
                </div>
                <div className="footer-content">
                    <div className="contact-info">
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i> Dirección: Mendoza 2300</li>
                            <li><i className="fas fa-phone"></i> Teléfono: +54 3815 55-6840</li>
                            <li><i className="fas fa-envelope"></i> Email: magnoly.contacto@gmail.com</li>
                        </ul>
                        <div className="social">
                            <h5>Seguinos en:</h5>
                            <ul className='icons'>
                                <li><a href="https://www.instagram.com/magnolypasteleria/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100063639187307&__tn__=-UC*F" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                                <li><a href={whatsappLink} className='button-footer' target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form ref={formRef}>
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre" required />
                            <input type="email" id="email" name="email" placeholder="Email" required />
                            <input type="text" id="telefono" name="telefono" placeholder="Teléfono" required />
                            <textarea id="mensaje" name="mensaje" placeholder="Mensaje" required></textarea>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
                <hr />
                <ul className="footer-bottom">
                    <div>©CanepaDev</div>
                    <div>Todos los derechos reservados</div>
                    <div>219Labs</div>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
