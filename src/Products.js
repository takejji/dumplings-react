import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import hinnn from './hinn.jpg';

const Products = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [flavor, setFlavor] = useState('Говядина');

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleFlavorChange = (e) => {
    setFlavor(e.target.value);
  };

  const handleAddToCart = () => {
    addToCart({ name: 'Пельмени', quantity: quantity, flavor: flavor, price: 80 }); 
  };

  return (
    <div>
      <h2>Товары</h2>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={hinnn} /> 
        <Card.Body>
          <Card.Title>Пельмени</Card.Title>
          <Card.Text>Ебейщие пельемени. 80 Руб.</Card.Text>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">Количество:</Form.Label>
              <Col sm="8">
                <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">Вкус:</Form.Label>
              <Col sm="8">
                <Form.Select value={flavor} onChange={handleFlavorChange}>
                  <option value="Говядина">Говядина</option>
                  <option value="Свинина">Свинина</option>
                  <option value="Курица">Курица</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
          <Link to="/blog">Просмотреть заказ</Link> 
          <hr/>
          <Button onClick={handleAddToCart}>Добавить в корзину</Button>
        </Card.Body>
      </Card>
      {/* добавляем карточки для остальных товаров */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={hinnn} /> 
        <Card.Body>
          <Card.Title>Хинкали</Card.Title>
          <Card.Text>Ебейщие хинкали. 80 Руб.</Card.Text>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">Количество:</Form.Label>
              <Col sm="8">
                <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">Вкус:</Form.Label>
              <Col sm="8">
                <Form.Select value={flavor} onChange={handleFlavorChange}>
                  <option value="Говядина">Говядина</option>
                  <option value="Свинина">Свинина</option>
                  <option value="Курица">Лисички</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
          <Link to="/blog">Просмотреть заказ</Link> 
          <hr/>
          <Button onClick={handleAddToCart}>Добавить в корзину</Button>
        </Card.Body>
      </Card>
      {/* добавляем карточки для остальных товаров */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={hinnn} /> 
        <Card.Body>
          <Card.Title>Гедза</Card.Title>
          <Card.Text>Ебейщие Гедза. 80 Руб.</Card.Text>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">Количество:</Form.Label>
              <Col sm="8">
                <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">Вкус:</Form.Label>
              <Col sm="8">
                <Form.Select value={flavor} onChange={handleFlavorChange}>
                  <option value="Говядина">Говядина</option>
                  <option value="Свинина">Свинина</option>
                  <option value="Курица">Курица</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
          <Link to="/blog">Просмотреть заказ</Link> 
          <hr/>
          <Button onClick={handleAddToCart}>Добавить в корзину</Button>
        </Card.Body>
      </Card>
      {/* добавляем карточки для остальных товаров */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={hinnn} /> 
        <Card.Body>
          <Card.Title>Акиця Пельмени + Пиво</Card.Title>
          <Card.Text>Пиво, кстати, тоже ебейщее. 80 Руб.</Card.Text>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">Количество:</Form.Label>
              <Col sm="8">
                <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">Вкус:</Form.Label>
              <Col sm="8">
                <Form.Select value={flavor} onChange={handleFlavorChange}>
                  <option value="Говядина">Говядина + балтика 9</option>
                  <option value="Свинина">Свинина + Жигулевское</option>
                  <option value="Курица">Курица + Исса</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
          <Link to="/blog">Просмотреть заказ</Link> 
          <hr/>
          <Button onClick={handleAddToCart}>Добавить в корзину</Button>
        </Card.Body>
      </Card>
      {/* добавляем карточки для остальных товаров */}
    </div>
  );
};

export default Products;