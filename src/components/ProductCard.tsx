import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Product } from '../types/Product';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-100">
        <div className="position-relative overflow-hidden">
          {product.isOnSale && (
            <span className="badge-special">-{product.discount}%</span>
          )}
          <Card.Img 
            variant="top" 
            src={product.imageUrl} 
            alt={product.name}
            style={{ height: '280px', objectFit: 'cover' }} 
          />
          <div 
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ 
              background: 'rgba(0,0,0,0.2)', 
              opacity: 0, 
              transition: 'all 0.3s ease',
              ':hover': { opacity: 1 }
            }}
          >
            <Button 
              className="btn-cherry"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.3s ease' }}
            >
              <Eye size={18} className="me-2" />
              Ver más
            </Button>
          </div>
        </div>
        <Card.Body>
          <Card.Title 
            className="mb-1 fw-bold"
            style={{ fontSize: '18px' }}
          >
            {product.name}
          </Card.Title>
          <Card.Text 
            className="fw-bold mt-2"
            style={{ 
              fontSize: '20px',
              color: product.isOnSale ? 'var(--cherry-pink)' : 'inherit'
            }}
          >
            ${product.isOnSale 
              ? Math.floor(product.price * (1 - (product.discount || 0) / 100)) 
              : product.price}
            {product.isOnSale && (
              <span 
                className="ms-2 text-decoration-line-through fw-normal"
                style={{ fontSize: '16px', color: 'var(--text-gray)' }}
              >
                ${product.price}
              </span>
            )}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <small className="text-muted">{product.category}</small>
            <Button 
              variant="outline-dark" 
              size="sm" 
              className="rounded-pill"
              style={{ fontSize: '14px', padding: '4px 12px' }}
            >
              Agregar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProductCard;