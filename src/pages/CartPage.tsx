import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-vh-100 py-5 d-flex align-items-center" style={{ backgroundColor: 'var(--cherry-pink-light)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <ShoppingBag size={64} className="mb-4" style={{ color: 'var(--cherry-pink)' }} />
            <h2 className="fw-bold mb-3" style={{ fontFamily: 'Baloo 2', fontSize: '32px' }}>
              Tu carrito está vacío
            </h2>
            <p className="lead mb-4">¡Agregá productos para comenzar tu compra!</p>
            <Button href="/store" className="btn-cherry">
              Ir a la tienda
            </Button>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-vh-100 py-5" style={{ backgroundColor: 'var(--cherry-pink-light)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="fw-bold mb-4" style={{ fontFamily: 'Baloo 2', fontSize: '32px' }}>
            Tu Carrito 🛍️
          </h1>

          <Row>
            <Col lg={8}>
              <div className="bg-white p-4 rounded-4 shadow-sm mb-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="d-flex align-items-center mb-4 pb-4 border-bottom"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="rounded-3"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <div className="ms-4 flex-grow-1">
                      <h5 className="fw-bold mb-1">{item.name}</h5>
                      <p className="text-muted mb-2">{item.category}</p>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-circle"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="mx-3 fw-medium">{item.quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-circle"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="text-end ms-4">
                      <p className="fw-bold mb-2" style={{ fontSize: '18px' }}>
                        ${item.price * item.quantity}
                      </p>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={14} className="me-1" />
                        Eliminar
                      </button>
                    </div>
                  </motion.div>
                ))}
                <div className="text-end">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={clearCart}
                    className="mt-3"
                  >
                    <Trash2 size={14} className="me-1" />
                    Vaciar carrito
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="bg-white p-4 rounded-4 shadow-sm">
                <h4 className="fw-bold mb-4" style={{ fontFamily: 'Baloo 2' }}>
                  Resumen de compra
                </h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Productos ({totalItems})</span>
                  <span>${total}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Envío</span>
                  <span>Gratis</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold" style={{ fontSize: '20px', color: 'var(--cherry-pink)' }}>
                    ${total}
                  </span>
                </div>
                <Button className="btn-cherry w-100 mb-3">
                  Finalizar compra
                </Button>
                <Button variant="outline-secondary" href="/store" className="w-100">
                  Seguir comprando
                </Button>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default CartPage;