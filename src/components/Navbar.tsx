import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Cherry, ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';
import { useAuthStore } from '../stores/authStore';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const cartItems = useCartStore((state) => state.items);
  const isAdmin = useAuthStore((state) => state.isAdmin);
  const setIsAdmin = useAuthStore((state) => state.setIsAdmin);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      className={`py-3 transition-all duration-300 ${
        scrolled || location.pathname !== '/' ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
          <Cherry size={28} color="#ff4e7a" className="me-2" />
          <span className="fw-bold" style={{ fontFamily: 'Baloo 2', fontSize: '24px' }}>
            Cherry Club
          </span>
        </Link>
        <BootstrapNavbar.Toggle 
          aria-controls="navbar-nav" 
          className="border-0"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <X size={24} /> : <Menu size={24} />}
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="nav-link mx-2 fw-medium">Inicio</Link>
            <Link to="/store" className="nav-link mx-2 fw-medium">Tienda</Link>
            <Link to="/contact" className="nav-link mx-2 fw-medium">Contacto</Link>
            <Link to="/#favorites" className="nav-link mx-2 fw-medium">Favoritos</Link>
            <Link to="/#offers" className="nav-link mx-2 fw-medium">Ofertas</Link>
          </Nav>
          <div className="d-flex align-items-center">
            <button className="btn btn-link text-dark me-2 p-0">
              <Search size={20} />
            </button>
            <Link to={isAdmin ? "/admin" : "#"} className="btn btn-link text-dark me-2 p-0" onClick={() => !isAdmin && setIsAdmin(true)}>
              <User size={20} />
            </Link>
            <Link to="/cart" className="btn btn-link text-dark p-0 position-relative">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  style={{ backgroundColor: 'var(--cherry-pink)', fontSize: '10px' }}
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;