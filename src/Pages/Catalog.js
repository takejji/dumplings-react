import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Products from '../Products';
import Cart from '../Cart';
import Header from '../Components/Header'; 

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Products addToCart={addToCart} />
          </Col>
          <Col>
            <Cart cart={cart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;