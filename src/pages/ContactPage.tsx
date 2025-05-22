import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Send, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-vh-100 py-5" style={{ backgroundColor: 'var(--cherry-pink-light)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h1 className="fw-bold mb-3" style={{ fontFamily: 'Baloo 2', fontSize: '42px' }}>
            ¡Contactanos! 🍒
          </h1>
          <p className="lead mb-0" style={{ maxWidth: '600px', margin: '0 auto' }}>
            ¿Tenés alguna pregunta o querés hacer un pedido personalizado? ¡Estamos para ayudarte!
          </p>
        </motion.div>

        <Row className="g-4">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
                <h3 className="fw-bold mb-4" style={{ fontFamily: 'Baloo 2', fontSize: '24px' }}>
                  Información de Contacto
                </h3>
                
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', backgroundColor: 'var(--cherry-pink-light)' }}>
                    <MapPin size={24} color="var(--cherry-pink)" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1" style={{ fontSize: '16px' }}>Dirección</h5>
                    <p className="mb-0">Av. Santa Fe 1234, CABA</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', backgroundColor: 'var(--cherry-pink-light)' }}>
                    <Phone size={24} color="var(--cherry-pink)" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1" style={{ fontSize: '16px' }}>Teléfono</h5>
                    <p className="mb-0">+54 11 1234-5678</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', backgroundColor: 'var(--cherry-pink-light)' }}>
                    <Mail size={24} color="var(--cherry-pink)" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1" style={{ fontSize: '16px' }}>Email</h5>
                    <p className="mb-0">hola@cherryclub.com.ar</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: '48px', height: '48px', backgroundColor: 'var(--cherry-pink-light)' }}>
                    <Instagram size={24} color="var(--cherry-pink)" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1" style={{ fontSize: '16px' }}>Instagram</h5>
                    <p className="mb-0">@cherryclubarg</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-4 shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <Clock size={20} className="me-2" color="var(--cherry-pink)" />
                  <h3 className="fw-bold mb-0" style={{ fontFamily: 'Baloo 2', fontSize: '24px' }}>
                    Horarios de Atención
                  </h3>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">Lunes a Viernes: 10:00 - 18:00</li>
                  <li className="mb-2">Sábados: 10:00 - 14:00</li>
                  <li>Domingos y Feriados: Cerrado</li>
                </ul>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-4 rounded-4 shadow-sm">
                <h3 className="fw-bold mb-4" style={{ fontFamily: 'Baloo 2', fontSize: '24px' }}>
                  Envianos un Mensaje
                </h3>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tu nombre" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Email</Form.Label>
                        <Form.Control type="email" placeholder="Tu email" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">Asunto</Form.Label>
                    <Form.Control type="text" placeholder="Asunto del mensaje" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="¿En qué podemos ayudarte?" />
                  </Form.Group>

                  <Button className="btn-cherry w-100">
                    <Send size={18} className="me-2" />
                    Enviar Mensaje
                  </Button>
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;