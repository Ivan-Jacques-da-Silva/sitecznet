import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaClock, FaUser, FaPhone, FaGlobe, FaHome, FaInfoCircle, FaHeadset, FaBook, FaWhatsapp } from 'react-icons/fa';
import logo from './../img/logoVermelho.png'; // Importe a imagem corretamente

const Menu = () => {
  const iconStyle = { color: '#E6341A', marginRight: '8px' };
  const linkStyle = { textDecoration: 'none', color: 'black', fontWeight: 'bold', marginRight: '15px' };
  const buttonLinkStyle = { color: 'white', textDecoration: 'none', marginRight: '15px' };

  return (
    <div>
      {/* Barra preta superior */}
      <div className="bg-black text-white py-2">
        <Container className="d-none d-lg-flex justify-content-between align-items-center">
          <div>
            <FaFacebook style={iconStyle} />
            <FaInstagram style={iconStyle} />
            <FaClock style={iconStyle} />
            <span>Atendimento: 08h00 às 12h00, 13h30 às 18h00</span>
          </div>
          <div className="d-flex align-items-center">
            {/* "Trabalhe Conosco" à esquerda do botão Suporte */}
            <Link to="/contratacao" style={buttonLinkStyle} className="d-flex align-items-center">
              <FaUser style={{ color: '#E6341A', marginRight: '4px' }} />
              Trabalhe Conosco
            </Link>
            <a href="tel:08006441277">
              <Button variant="danger" className="ms-3" style={{ backgroundColor: '#E6341A' }}>
                Suporte: 0800 644-1277
              </Button>
            </a>
          </div>
        </Container>
      </div>

      {/* Menu principal */}
      <Navbar collapseOnSelect expand="lg" bg="white" className="py-3 shadow-sm">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <img src={logo} alt="CZnet Logo" style={{ height: '40px' }} />
          </Navbar.Brand>

          {/* Botão responsivo para mobile */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* Links de navegação */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={linkStyle}>
                <FaHome style={iconStyle} /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/internet" style={linkStyle}>
                <FaGlobe style={iconStyle} /> Internet
              </Nav.Link>
              <Nav.Link as={Link} to="/telefonia" style={linkStyle}>
                <FaPhone style={iconStyle} /> Telefonia
              </Nav.Link>
              <Nav.Link as={Link} to="/sobre-nos" style={linkStyle}>
                <FaInfoCircle style={iconStyle} /> Sobre nós
              </Nav.Link>
              <Nav.Link href="https://mksolutions.cznet.net.br/sac" target="_blank" style={linkStyle}>
                <FaHeadset style={iconStyle} /> SAC
              </Nav.Link>
              <Nav.Link href="https://estante.app/" target="_blank" style={linkStyle}>
                <FaBook style={iconStyle} /> Biblioteca CZnet
              </Nav.Link>

              {/* Link "Trabalhe Conosco" para celular */}
              <Nav.Link as={Link} to="/contratacao" style={linkStyle} className="d-lg-none">
                <FaUser style={iconStyle} /> Trabalhe Conosco
              </Nav.Link>
            </Nav>

            {/* Botão WhatsApp */}
            <div className='d-flex justify-content-center'>
              <a href="https://wa.me/55558006441277?text=Ol%C3%A1%2C+Vim+Pelo+site%21">
                <Button variant="danger" style={{ backgroundColor: '#E6341A', fontWeight: 'bold', fontSize: '14px', borderRadius: '25px' }}>
                  <FaWhatsapp style={{ color: 'white', marginRight: '8px' }} />
                  WhatsApp
                </Button>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
