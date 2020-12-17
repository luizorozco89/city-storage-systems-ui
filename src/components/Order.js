import React from 'react';
import styled from 'styled-components';

const OrderWrapper = styled.div`
  box-shadow: 0 4px 2px -2px gray;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 10px 0;
`;

const turnToMoney = value => value / 100;

const Order = ({ order }) => {
  const { customer, destination, item, event_name, price } = order;

  return(
    <OrderWrapper>
      <div>{customer}</div>
      <div>{destination}</div>
      <div>{item}</div>
      <div>{event_name}</div>
      <div>{turnToMoney(price)}</div>
    </OrderWrapper>
  );
}

export default Order;