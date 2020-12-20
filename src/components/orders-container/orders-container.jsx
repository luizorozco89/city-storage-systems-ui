import React from 'react';

import OrderRow from '../order-row';
import StyledOrdersContainer from './orders-container.style';

const OrdersContainer = ({ orders }) => {
  return(
    <StyledOrdersContainer>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Destination</th>
            <th>Dish</th>
            <th>Status</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody data-testid="orders-table-body">
          {orders.map((order, index) => <OrderRow key={order.id} order={order} />)}
        </tbody>
      </table>
    </StyledOrdersContainer>
  );
};

export default OrdersContainer;
