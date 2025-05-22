import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Cherry, Instagram, Facebook, Twitter, Heart, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-5">
      <Container>
        <Row className="gy-4">
          <Col md={3} sm={6}>
            <div className="mb-4 d-flex align-items-center">
              <Cherry size={24} color="#ff4e7a" className="me-2" />
              <h5 className="fw-bold mb-0" style={{ fontFamily: 'Baloo 2', fontSize: '24px' }}>
                Cherry Club
              </h5>
            </div>
            <p className="text-muted mb-4">
              Accesorios, objetos únicos y regalos con mucha onda para alegrar tu día a día.
            </p>
            <div className="d-flex">
              <a href="#" className="me-3 text-secondary">
                <Instagram size={20} />
              </a>
              <a href="#" className="me-3 text-secondary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary">
                <Twitter size={20} />
              </a>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <h5 className="fw-bold mb-4" style={{ fontFamily: 'Baloo 2', fontSize: '18px' }}>
              Enlaces rápidos
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">Sobre nosotros</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">Envíos</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">Contacto</a>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6}>
            <h5 className="fw-bold mb-4" style={{ fontFamily: 'Baloo 2', fontSize: '18px' }}>
              Categorías
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">Stickers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">Ropa</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">Papelería</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-secondary">Accesorios</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-secondary">Ofertas</a>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6}>
            <h5 className="fw-bold mb-4" style={{ fontFamily: 'Baloo 2', fontSize: '18px' }}>
              Newsletter
            </h5>
            <p className="text-muted mb-3">
              Suscribite para recibir novedades y descuentos exclusivos
            </p>
            <Form className="mb-3">
              <div className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Tu email"
                  className="me-2"
                  style={{ borderRadius: '32px 0 0 32px' }}
                />
                <Button 
                  className="px-3"
                  style={{ 
                    backgroundColor: 'var(--cherry-pink)',
                    border: 'none',
                    borderRadius: '0 32px 32px 0'
                  }}
                >
                  <ArrowRight size={18} />
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <hr className="my-4" />

        <div className="py-3 text-center">
          <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>
            © 2025 Cherry Club Argentina - Hecho con <Heart size={14} color="#ff4e7a" className="mx-1" /> en Buenos Aires
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;