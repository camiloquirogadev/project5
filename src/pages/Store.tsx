import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <section className="py-5 min-vh-100" style={{ backgroundColor: 'var(--cherry-pink-light)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h1 className="fw-bold mb-0" style={{ fontFamily: 'Baloo 2', fontSize: '32px' }}>
              Nuestra Tienda 🍒
            </h1>
            <div className="d-flex align-items-center">
              <span className="text-muted me-2">{filteredProducts.length} productos</span>
              <ShoppingBag size={20} />
            </div>
          </div>

          <Row className="g-4">
            <Col lg={3}>
              <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
                <div className="d-flex align-items-center mb-4">
                  <SlidersHorizontal size={20} className="me-2" />
                  <h5 className="fw-bold mb-0">Filtros</h5>
                </div>

                <div className="mb-4">
                  <Form.Control
                    type="search"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-3"
                  />
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Categorías</h6>
                  {categories.map((category) => (
                    <Form.Check
                      key={category}
                      type="radio"
                      id={category}
                      label={category.charAt(0).toUpperCase() + category.slice(1)}
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="mb-2"
                    />
                  ))}
                </div>

                <div>
                  <h6 className="fw-bold mb-3">Ordenar por</h6>
                  <Form.Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Destacados</option>
                    <option value="price-low">Precio: Menor a Mayor</option>
                    <option value="price-high">Precio: Mayor a Menor</option>
                    <option value="name">Nombre</option>
                  </Form.Select>
                </div>
              </div>
            </Col>

            <Col lg={9}>
              <Row xs={1} sm={2} lg={3} className="g-4">
                {filteredProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Store;