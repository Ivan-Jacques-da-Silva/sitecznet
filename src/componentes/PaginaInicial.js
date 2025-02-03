import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form } from 'react-bootstrap';
import { FaMoneyCheckAlt, FaFileInvoiceDollar, FaHome, FaBuilding, FaCity, FaPhone, FaWhatsapp, FaWifi, FaTags, FaHeadset } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from './../img/Banner-site-02.png';
import imgDegrade from './../img/fundoSessao.jpg';
import backgroundImage from './../img/fundoContato.jpg';
import './../css/PaginaInicial.css';
import plano1 from './../img/plano1.jpg';
import plano2 from './../img/plano2.jpg';
import plano3 from './../img/plano3.jpg';

const PaginaInicial = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            {/* Seção do banner */}
            <div className="banner">
                <img src={banner} alt="Banner" style={{ width: '100%', height: 'auto' }} />
            </div>

            {/* Seção dos cards */}
            <Container className="cards-container" >
                <Row className="justify-content-center">
                    <Col md={4} data-aos="fade-up">
                        <Card className="text-center shadow-sm">
                            <Card.Body>
                                <FaMoneyCheckAlt style={{ color: '#E6341A', fontSize: '40px' }} />
                                <Card.Title className="mt-3">Portal do PIX</Card.Title>
                                <a href="https://pix.cznet.net.br/login">
                                    <Button variant="outline-danger" style={{ fontWeight: 'bold' }}>
                                        Acessar
                                    </Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} data-aos="fade-up">
                        <Card className="text-center shadow-sm">
                            <Card.Body>
                                <FaFileInvoiceDollar style={{ color: '#E6341A', fontSize: '40px' }} />
                                <Card.Title className="mt-3">Portal Faturas</Card.Title>
                                <a href="https://portal.cznet.net.br/login">
                                    <Button variant="outline-danger" style={{ fontWeight: 'bold' }}>
                                        Acessar
                                    </Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Seção "Nossos serviços" */}
            <div className='services-background'>
                <Container className="services-section sessao-mg">
                    <Row>
                        <Col md={6} className="text-left" data-aos="fade-right">
                            <h6 className="text-danger" style={{ fontFamily: 'Arial, sans-serif' }}>Nossos serviços</h6>
                            <div style={{ height: '20px' }}></div> {/* Espaço */}
                            <h2 className="text-black" style={{ fontWeight: 'bold' }}>Conectividade de alta performance para todos os segmentos</h2>
                            <p className="text-muted mt-4" style={{ textAlign: 'justify', color: '#6c757d' }}>
                                Navegue com CZnet e desfrute da melhor conexão, seja em casa ou nos negócios. Velocidade, confiabilidade e suporte, sempre ao seu lado.
                            </p>
                        </Col>

                        {/* Cards estilizados em formato piramidal */}
                        <Col md={6} style={{ marginTop: '40px' }}>
                            <Row className="justify-content-center">
                                <Col md={4} className="service-card" data-aos="fade-left">
                                    <Card className="text-center shadow-sm custom-card">
                                        <Card.Body>
                                            <div className="icon-circle">
                                                <FaHome style={{ color: 'white', fontSize: '30px' }} />
                                            </div>
                                            <Card.Title className="mt-3">Residencial</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} className="service-card middle-card" data-aos="fade-down">
                                    <Card className="text-center shadow-sm custom-card" style={{ marginTop: '-30px' }}>
                                        <Card.Body>
                                            <div className="icon-circle">
                                                <FaBuilding style={{ color: 'white', fontSize: '30px' }} />
                                            </div>
                                            <Card.Title className="mt-3">Corporativa</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} className="service-card" data-aos="fade-right">
                                    <Card className="text-center shadow-sm custom-card">
                                        <Card.Body>
                                            <div className="icon-circle">
                                                <FaCity style={{ color: 'white', fontSize: '30px' }} />
                                            </div>
                                            <Card.Title className="mt-3">Empresarial</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Seção com fundo degradê */}
            <section className="sessao-degrade">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-left">
                            <Card className="border-0 bg-transparent">
                                <Card.Body>
                                    <img src={imgDegrade} alt="Família assistindo TV" className="img-fluid" />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="text-content">
                            <Card className="border-0 bg-transparent">
                                <Card.Body>
                                    <h6>Nossa Internet permite você</h6>
                                    <h2>Assista seus programas favoritos <br />com sua família e a melhor internet.</h2>
                                    <p>
                                        Com a nossa internet de alta velocidade, você pode criar momentos especiais com sua família.
                                        Transmita os seus esportes favoritos ou assista a filmes.
                                    </p>
                                    <Button variant="light" className="btn-redondo">Entre em contato</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Seção dos planos */}
            <section>
                <Container className="planos-container text-center mt-5">
                    <h6 className="text-danger">Nossos Planos</h6>
                    <h2 className="fw-bold">Escolha o melhor plano <br /> pelo melhor preço.</h2>

                    <Row className="justify-content-center mt-4">
                        {/* Plano 100 Megas */}
                        <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4" data-aos="fade-up">
                            <Card className="text-center shadow-sm plano-card plano-100">
                                <Card.Img variant="top" src={plano1} className="plano-img" />
                                <Card.Body>
                                    <h2 className="plano-title">100</h2>
                                    <p>Megas</p>
                                    <div className="linha-divisoria"></div>
                                    <ul className="plano-benefits">
                                        <li>✔ 100% Fibra Óptica</li>
                                        <li>✔ 100 MEGA Upload</li>
                                    </ul>
                                    <Button
                                        variant="danger"
                                        className="btn-plano"
                                        as="a"
                                        href="https://wa.me/55558006441277?text=Quero%20saber%20mais%20sobre%20o%20plano%20100%20MEGAS"
                                        target="_blank"
                                    >
                                        Contratar Plano
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Plano 400 Megas */}
                        <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4" data-aos="fade-up">
                            <Card className="text-center shadow-sm plano-card plano-400">
                                <Card.Img variant="top" src={plano2} className="plano-img" />
                                <Card.Body>
                                    <h2 className="plano-title">400</h2>
                                    <p>Megas</p>
                                    <div className="linha-divisoria"></div>
                                    <ul className="plano-benefits">
                                        <li>✔ 100% Fibra Óptica</li>
                                        <li>✔ 100 MEGA Upload</li>
                                    </ul>
                                    <Button
                                        variant="light"
                                        className="btn-plano btn-outline"
                                        as="a"
                                        href="https://wa.me/55558006441277?text=Quero%20saber%20mais%20sobre%20o%20plano%20400%20MEGAS"
                                        target="_blank"
                                    >
                                        Contratar Plano
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Plano 500 Megas */}
                        <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mb-4" data-aos="fade-up">
                            <Card className="text-center shadow-sm plano-card plano-500">
                                <Card.Img variant="top" src={plano3} className="plano-img" />
                                <Card.Body>
                                    <h2 className="plano-title">500</h2>
                                    <p>Megas</p>
                                    <div className="linha-divisoria"></div>
                                    <ul className="plano-benefits">
                                        <li>✔ 100% Fibra Óptica</li>
                                        <li>✔ 100 MEGA Upload</li>
                                        <li>✔ Equipamento em Comodato</li>
                                    </ul>
                                    <Button
                                        variant="danger"
                                        className="btn-plano"
                                        as="a"
                                        href="https://wa.me/55558006441277?text=Quero%20saber%20mais%20sobre%20o%20plano%20500%20MEGAS"
                                        target="_blank"
                                    >
                                        Contratar Plano
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>


            </section>

            <section>
                <Container className="sessao-clientes text-center py-5 mt-5 mb-5">
                    <h6 className="text-danger" style={{ fontFamily: 'Arial, sans-serif' }}>Sempre buscamos</h6>
                    <h2 className="fw-bold">Para nossos clientes</h2>
                    <Row className="justify-content-center mt-4">
                        <Col md={4} className="cliente-card" data-aos="fade-up">
                            <div className="cliente-box p-4 border border-danger rounded" style={{ backgroundColor: '#ffe5e5' }}>
                                <div className="icon-container mb-3">
                                    <FaWifi size={60} className="text-danger" />
                                </div>
                                <p className="fw-bold mt-2">Qualidade na entrega</p>
                            </div>
                        </Col>
                        <Col md={4} className="cliente-card" data-aos="fade-up">
                            <div className="cliente-box p-4 border border-danger rounded" style={{ backgroundColor: '#ffe5e5' }}>
                                <div className="icon-container mb-3">
                                    <FaTags size={60} className="text-danger" />
                                </div>
                                <p className="fw-bold mt-2">O melhor preço</p>
                            </div>
                        </Col>
                        <Col md={4} className="cliente-card" data-aos="fade-up">
                            <div className="cliente-box p-4 border border-danger rounded" style={{ backgroundColor: '#ffe5e5' }}>
                                <div className="icon-container mb-3">
                                    <FaHeadset size={60} className="text-danger" />
                                </div>
                                <p className="fw-bold mt-2">Suporte 24h</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <div className="sessao-contato d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'top', position: 'relative', minHeight: '700px' }}>
                    <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}></div>
                    <Container className="position-relative text-white h-100 d-flex align-items-center">
                        <Row className="align-items-center w-100">
                            <Col md={6} className="text-center text-md-left p-4">
                                <h6 className="text-danger">Venha até nós</h6>
                                <h2 className="fw-bold">Ou entre em contato:</h2>
                                <div className="mt-4">
                                    <Button variant="danger" className="me-2" href="tel:08006441277"><FaPhone /> Telefone</Button>
                                    <Button variant="danger" href="https://api.whatsapp.com/send/?phone=55558006441277&text=Ol%C3%A1%2C+Vim+Pelo+site%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> Whatsapp</Button>
                                </div>
                            </Col>
                            <Col md={6} className="glass-form p-4 rounded" style={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.2)' }}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formNome">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control type="text" placeholder="Seu nome" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formAssunto">
                                        <Form.Label>Assunto</Form.Label>
                                        <Form.Control type="text" placeholder="Assunto" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formMensagem">
                                        <Form.Label>Mensagem</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Digite sua mensagem" />
                                    </Form.Group>
                                    <Button variant="danger" type="submit">Enviar</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
};

export default PaginaInicial;
