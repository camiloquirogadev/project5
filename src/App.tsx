import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Store from './pages/Store';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import AdminProfile from './pages/AdminProfile';
import Footer from './components/Footer';
import { useAuthStore } from './stores/authStore';

function App() {
  const isAdmin = useAuthStore((state) => state.isAdmin);

  useEffect(() => {
    document.title = "Cherry Club - La Tienda Más Cute 🍒";
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route 
            path="/admin" 
            element={isAdmin ? <AdminProfile /> : <Navigate to="/" replace />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;