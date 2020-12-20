import React from 'react';
import { shape, string, number } from 'prop-types';

import StyledOrderRow from './order-row.style';

const turnToMoney = value => value / 100;

const OrderRow = ({ order }) => {
  const { id, customer, destination, item, event_name, price } = order;

  return(
    <StyledOrderRow className="order-row" data-testid={`order-row-${id}`}>
      <td>{customer}</td>
      <td>{destination}</td>
      <td>{item}</td>
      <td>{event_name}</td>
      <td className="price">${turnToMoney(price)}</td>
    </StyledOrderRow>
  );
}

OrderRow.propTypes = {
  order: shape({
    id: string,
    customer: string,
    destination: string,
    item: string,
    event_name: string,
    price: number
  })
};

OrderRow.defaultProps = {
  order: {}
};

export default OrderRow;