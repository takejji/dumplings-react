import React, { Component} from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';
import hinki from './hinki.jpg'
import hin from './hin.jpg'
import { Link } from 'react-router-dom';



export default class Blog extends Component {
    render() {
      return (
        <div className="main-container">
          {/* <h1 className="text-center">Популярное</h1> */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={hinki}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Хинкали-Пельмени</h3>
                <p>Пельмени с капустой внутри Хинкали</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* след карусель если надо */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={hin}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Гедза в Пельменях</h3>
                <p>Описание первого товара</p>
          <hr/>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Container>
            <h2 className="text-center mt-5 mb-3">Товары</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Название товара</Card.Title>
                    <Card.Text>Описание товара</Card.Text>
                    <Link to="/blog">Просмотреть заказ</Link> 
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Название товара</Card.Title>
                    <Card.Text>Описание товара</Card.Text>
                    <Link to="/blog">Просмотреть заказ</Link> 
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Название товара</Card.Title>
                    <Card.Text>Описание товара</Card.Text>
                    <Link to="/blog">Просмотреть заказ</Link> 
                  </Card.Body>
                </Card>
              </Col>
              {/* след товар */}
              
            </Row>
            <h2 className="text-center mt-5 mb-3">Акции</h2>
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Название акционного товара</Card.Title>
                    <Card.Text>Описание акционного товара</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* след акции */}
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Название акционного товара</Card.Title>
                    <Card.Text>Описание акционного товара</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/*  след акции */}
            </Row>
          </Container>
        </div>
      );
    };
}    