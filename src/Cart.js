// import React from 'react';
// import { ListGroup } from 'react-bootstrap';

// const Cart = ({ cart }) => {
//   return (
//     <div>
//       <h2>Корзина</h2>
//       <ListGroup>
//         {cart.map((item, index) => (
//           <ListGroup.Item key={index}>
//             {item.quantity} шт. {item.flavor} {item.name}
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </div>
//   );
// };

// export default Cart;



import React, { useState } from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleOrder = () => {
    if (cardNumber && name && address) {
      setOrderPlaced(true);
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  };

  return (
    <div>
      <h2>Корзина</h2>
      <ListGroup>
        {cart.map((item, index) => (
          <ListGroup.Item key={index}>
            {item.quantity} шт. {item.flavor} {item.name} - Цена: Руб.{item.price.toFixed(2)}
            {/* <Button onClick={() => removeFromCart(index)}>Удалить</Button> */}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <p>Итого: {total.toFixed(2)} Рублей.</p>

      {/* <Button variant="danger" onClick="/">Очистить корзину</Button> */}

      <hr />
        <a href='/catalog'>Очистить корзину</a>
      <hr />

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Номер карты:</Form.Label>
          <Form.Control type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Имя:</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Адрес:</Form.Label>
          <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>
        <Button onClick={handleOrder}>Заказать</Button>
      </Form>

      {orderPlaced && <p>Заказ создан.</p>}
    </div>
  );
};

export default Cart;

