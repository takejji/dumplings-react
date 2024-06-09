import React, { Component} from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import hinnn from '../hinn.jpg';


export default class Blog extends Component {
    render() {
        return (
            <Col md={4}>
                <Card>
                  <Card.Img variant="top" src={hinnn} />
                  <Card.Body>
                    <Card.Title>Название товара</Card.Title>
                    <Card.Text>Описание товара</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
        )
    }
}
