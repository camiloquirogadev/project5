import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { getSpecialOffers } from '../data/products';
import { Tag, Clock } from 'lucide-react';

const SpecialOffers: React.FC = () => {
  const specialOffers = getSpecialOffers();

  return (
    <section id="offers" className="section-padding cloud-bg" style={{ backgroundColor: 'var(--cherry-pink-light)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title fw-bold mb-5" style={{ fontFamily: 'Baloo 2', fontSize: '32px' }}>
            Ofertas Especiales
          </h2>
        </motion.div>

        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            {specialOffers.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-sm overflow-hidden">
                  <Row className="g-0">
                    <Col md={6}>
                      <div className="position-relative h-100">
                        <span className="badge-special">-{product.discount}%</span>
                        <Card.Img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <Card.Body className="d-flex flex-column h-100">
                        <Card.Title className="fw-bold mb-2" style={{ fontSize: '24px' }}>
                          {product.name}
                        </Card.Title>
                        <Card.Text className="mb-2">
                          {product.description}
                        </Card.Text>
                        <div className="d-flex align-items-center mt-2 mb-3">
                          <span className="fw-bold me-2" style={{ fontSize: '22px', color: 'var(--cherry-pink)' }}>
                            ${Math.floor(product.price * (1 - (product.discount || 0) / 100))}
                          </span>
                          <span className="text-decoration-line-through" style={{ color: 'var(--text-gray)' }}>
                            ${product.price}
                          </span>
                        </div>
                        <div className="mt-auto">
                          <Button className="btn-cherry w-100">Comprar ahora</Button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            ))}
          </Col>
          <Col lg={6}>
            <motion.div
              className="text-center text-lg-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-4 p-lg-5 rounded-4 shadow-sm" style={{ backgroundColor: 'white' }}>
                <h3 className="fw-bold mb-4" style={{ fontFamily: 'Baloo 2', fontSize: '28px' }}>
                  <Tag size={24} className="me-2" style={{ color: 'var(--cherry-pink)' }} />
                  Aprovechá nuestras promos
                </h3>
                <p className="lead mb-4">
                  Descuentos exclusivos por tiempo limitado en productos seleccionados. ¡No te los pierdas!
                </p>
                <div className="d-flex align-items-center mb-4">
                  <Clock size={20} className="me-2" style={{ color: 'var(--cherry-pink)' }} />
                  <span className="fw-medium">Ofertas válidas hasta agotar stock</span>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">✨ Envío gratis en compras mayores a $15000</li>
                  <li className="mb-2">✨ 3 cuotas sin interés en todos los productos</li>
                  <li>✨ Descuentos especiales para miembros del club</li>
                </ul>
                <Button className="btn-cherry">
                  Ver todas las ofertas
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SpecialOffers;