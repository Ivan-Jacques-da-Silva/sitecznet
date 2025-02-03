import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Manutencao = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Estamos em Manutenção</h1>
      <p className="mt-3">Volte em breve para aproveitar nossos serviços. Estamos trabalhando para melhorar!</p>
      <Link to="/">
        <Button variant="primary" className="mt-3">
          Voltar para Home
        </Button>
      </Link>
    </Container>
  );
};

export default Manutencao;
