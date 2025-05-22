import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="cloud-bg d-flex align-items-center" 
      style={{ 
        backgroundColor: 'var(--cherry-pink-light)',
        minHeight: '100vh',
        paddingTop: '76px' // Account for navbar
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="hero-title fw-bold mb-3"
                style={{ fontSize: '52px', color: 'var(--cherry-pink)' }}
              >
                🍒 ¡Bienvenide al club más cute del universo!
              </motion.h1>
              <motion.p 
                className="lead mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ fontSize: '18px' }}
              >
                Accesorios, objetos únicos y regalos con mucha onda
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Button 
                  className="btn-cherry"
                  style={{ fontSize: '20px' }}
                >
                  Explorá la tienda
                  <ArrowRight size={20} className="ms-2" />
                </Button>
              </motion.div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center position-relative"
            >
              <img 
                src="https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Cherry Club Products" 
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
              <motion.div
                initial={{ rotate: -5, y: 20 }}
                animate={{ rotate: 5, y: 0 }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3
                }}
                style={{
                  position: 'absolute',
                  bottom: '-40px',
                  right: '0px',
                  zIndex: 1
                }}
              >
                <img 
                  src="https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Decorative element" 
                  className="img-fluid rounded-circle shadow-sm"
                  style={{ width: '150px', height: '150px', objectFit: 'cover', border: '5px solid white' }}
                />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;