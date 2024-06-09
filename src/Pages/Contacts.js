import React, { Component} from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.quantity} шт. {item.flavor} {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;