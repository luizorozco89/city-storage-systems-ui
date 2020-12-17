import React from 'react';
import styled from 'styled-components';

const StyledOrderRow = styled.tr`
  border-bottom: 1px solid gray;
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
      <td>{turnToMoney(price)}</td>
    </StyledOrderRow>
  );
}

export default OrderRow;