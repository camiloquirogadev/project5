import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Send, Instagram, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--cherry-pink-dark)' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 
                className="section-title fw-bold mb-4" 
                style={{ fontFamily: 'Baloo 2', fontSize: '28px' }}
              >
                ¿Querés un pedido personalizado?
              </h2>
              <p className="lead mb-4">
                ¡Nos encantaría ayudarte a crear algo único! Completá el formulario y nos pondremos en contacto con vos.
              </p>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Nombre</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Tu nombre" 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Tu email" 
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Mensaje</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="¿Qué te gustaría crear?" 
                  />
                </Form.Group>
                <Button className="btn-cherry">
                  <Send size={18} className="me-2" />
                  Enviar
                </Button>
              </Form>
            </motion.div>
          </Col>
          <Col lg={1} className="d-none d-lg-block"></Col>
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h3 className="fw-bold mb-4" style={{ fontFamily: 'Baloo 2', fontSize: '24px' }}>
                  Contactanos
                </h3>
                <div className="d-flex align-items-center mb-4">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: 'var(--cherry-pink-light)'
                    }}
                  >
                    <Instagram size={24} color="var(--cherry-pink)" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0" style={{ fontSize: '16px' }}>Instagram</h5>
                    <p className="mb-0">@cherryclubarg</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: 'var(--cherry-pink-light)'
                    }}
                  >
                    <Mail size={24} color="var(--cherry-pink)" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0" style={{ fontSize: '16px' }}>Email</h5>
                    <p className="mb-0">hola@cherryclub.com.ar</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: 'var(--cherry-pink-light)'
                    }}
                  >
                    <Phone size={24} color="var(--cherry-pink)" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0" style={{ fontSize: '16px' }}>Teléfono</h5>
                    <p className="mb-0">+54 11 1234-5678</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-4 shadow-sm">
                <h5 className="fw-bold mb-3" style={{ fontFamily: 'Baloo 2', fontSize: '18px' }}>
                  Horario de atención
                </h5>
                <p className="mb-2">Lunes a Viernes: 10:00 - 18:00</p>
                <p className="mb-0">Sábados: 10:00 - 14:00</p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;