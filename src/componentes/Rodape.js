import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import logoBranco from './../img/logoBranco.png';
import fundoRodape from './../img/fundoRodape.jpg';

const Footer = () => {
    return (
        <div className="footer d-flex flex-column align-items-center justify-content-center position-relative" style={{ height: '400px', backgroundImage: `url(${fundoRodape})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}></div>
            <img src={logoBranco} alt="CZnet Logo" style={{ width: '180px', position: 'relative' }} />
            <p className="text-white text-center" style={{ maxWidth: '700px', fontSize: '18px', position: 'relative' }}>
                Na CZnet, proporcionamos conectividade de alta qualidade para todos. Junte-se a nós para uma experiência de internet excepcional.
            </p>
            <div className="social-icons mt-3" style={{ position: 'relative' }}>
                <a href="#" className="text-danger mx-2" style={{ fontSize: '28px' }}><FaInstagram /></a>
                <a href="#" className="text-danger mx-2" style={{ fontSize: '28px' }}><FaFacebook /></a>
            </div>
        </div>
    );
};

export default Footer;
