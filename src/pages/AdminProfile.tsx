import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Package, Users, DollarSign, TrendingUp, Edit, Trash2, Plus } from 'lucide-react';
import { products } from '../data/products';

const AdminProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('products');

  const stats = [
    { icon: Package, label: 'Productos', value: products.length, color: '#ff4e7a' },
    { icon: Users, label: 'Clientes', value: 124, color: '#4e7aff' },
    { icon: DollarSign, label: 'Ventas', value: '$45,678', color: '#4eff7a' },
    { icon: TrendingUp, label: 'Crecimiento', value: '+15%', color: '#7a4eff' },
  ];

  return (
    <div className="min-vh-100 py-5" style={{ backgroundColor: 'var(--cherry-pink-light)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fw-bold mb-0" style={{ fontFamily: 'Baloo 2', fontSize: '32px' }}>
              Panel de Administración
            </h1>
            <Button className="btn-cherry">
              <Plus size={18} className="me-2" />
              Nuevo Producto
            </Button>
          </div>

          <Row className="g-4 mb-4">
            {stats.map((stat, index) => (
              <Col key={index} md={6} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: '48px',
                            height: '48px',
                            backgroundColor: `${stat.color}20`,
                          }}
                        >
                          <stat.icon size={24} color={stat.color} />
                        </div>
                        <div>
                          <h6 className="fw-medium mb-1">{stat.label}</h6>
                          <h4 className="fw-bold mb-0">{stat.value}</h4>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold mb-0" style={{ fontFamily: 'Baloo 2' }}>
                  Productos
                </h4>
                <Form.Control
                  type="search"
                  placeholder="Buscar productos..."
                  className="w-auto"
                />
              </div>

              <Table responsive hover className="align-middle">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="rounded"
                            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                          />
                          <span className="ms-3 fw-medium">{product.name}</span>
                        </div>
                      </td>
                      <td>{product.category}</td>
                      <td>${product.price}</td>
                      <td>
                        <Badge 
                          bg={product.isNew ? 'success' : product.isOnSale ? 'warning' : 'primary'}
                        >
                          {product.isNew ? 'Nuevo' : product.isOnSale ? 'Oferta' : 'Normal'}
                        </Badge>
                      </td>
                      <td>
                        <Button variant="light" size="sm" className="me-2">
                          <Edit size={14} />
                        </Button>
                        <Button variant="light" size="sm">
                          <Trash2 size={14} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};

export default AdminProfile;