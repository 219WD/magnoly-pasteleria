import React from 'react';
import './Footer.css';
import Logo from '../../assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5690452344775!2d-65.23495847381113!3d-26.821847480373844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c5c3e43bbc3%3A0xc1b3d5a12cc339e1!2sPcia%20de%20Mendoza%202300%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1729100137795!5m2!1ses-419!2sar"
                style={{ width: '100vw', height: '50vh', border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <footer className='container-footer' id="contacto">
                <div className="logo-section">
                    <img src={Logo} alt="Logo" className="footer-logo" />
                    <h2>Todo sale rico si se hace con amor</h2>
                </div>
                <div className="footer-content">
                    <div className="contact-info">
                        <ul>
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i> Dirección: Calle Falsa 123</li>
                                <li><i className="fas fa-phone"></i> Teléfono: +54 381 1234567</li>
                                <li><i className="fas fa-envelope"></i> Email: contacto@miempresa.com</li>
                            </ul>

                        </ul>
                        <div className="social">
                            <h5>Seguinos en:</h5>
                            <ul className='icons'>
                                <li><i className="fab fa-instagram"></i></li>
                                <li><i className="fab fa-facebook"></i></li>
                                <li><i className="fab fa-whatsapp"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Nombre" required />
                            <input type="email" placeholder="Email" required />
                            <input type="tel" placeholder="Teléfono" required />
                            <textarea placeholder="Mensaje" required></textarea>
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
