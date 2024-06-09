import React from 'react';

const OrderDetails = ({ order }) => {
  return (
    <div>
      <h2>Детали заказа</h2>
      <p>Название: {order.name}</p>
      <p>Количество: {order.quantity}</p>
      <p>Вкус: {order.flavor}</p>
      <p>Цена: {order.price}</p>
    </div>
  );
};

export default OrderDetails;