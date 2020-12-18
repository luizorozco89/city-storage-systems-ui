import React from 'react';
import styled from 'styled-components';

const StyledOrderRow = styled.tr`
  border-bottom: 1px solid gray;

  .price {
    color: #4c00e6;
    font-weight: 600;
  }
`;

const turnToMoney = value => value / 100;

const OrderRow = ({ order }) => {
  const { customer, destination, item, event_name, price } = order;

  return(
    <StyledOrderRow>
      <td>{customer}</td>
      <td>{destination}</td>
      <td>{item}</td>
      <td>{event_name}</td>
      <td className="price">${turnToMoney(price)}</td>
    </StyledOrderRow>
  );
}

export default OrderRow;