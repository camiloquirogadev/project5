import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { getFavorites } from '../data/products';
import { Heart } from 'lucide-react';

const ClubFavorites: React.FC = () => {
  const favoriteProducts = getFavorites();

  return (
    <section id="favorites" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title fw-bold mb-5" style={{ fontFamily: 'Baloo 2', fontSize: '32px' }}>
            Favoritos del Club <span role="img" aria-label="love letter">💌</span>
          </h2>
        </motion.div>

        <Row xs={1} sm={2} md={3} className="g-4">
          {favoriteProducts.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="btn btn-outline-dark rounded-pill px-4 py-2">
            <Heart size={18} className="me-2" />
            Ver todos los favoritos
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default ClubFavorites;