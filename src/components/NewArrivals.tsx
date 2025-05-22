import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { getNewArrivals } from '../data/products';

const NewArrivals: React.FC = () => {
  const newProducts = getNewArrivals();

  return (
    <section id="new-arrivals" className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title fw-bold mb-5" style={{ fontFamily: 'Baloo 2', fontSize: '32px' }}>
            Nuevos Ingresos
          </h2>
        </motion.div>

        <Row xs={1} sm={2} md={3} className="g-4">
          {newProducts.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewArrivals;