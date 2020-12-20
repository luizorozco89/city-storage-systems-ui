import React from 'react';

import OrderRow from '../order-row';
import StyledOrdersTable from './orders-container.style';

const OrdersContainer = ({ orders }) => {
  return(
    <StyledOrdersTable>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Destination</th>
          <th>Dish</th>
          <th>State</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody data-testid="orders-table-body">
        {orders.map((order, index) => <OrderRow key={order.id} order={order} />)}
      </tbody>
    </StyledOrdersTable>
  );
};

export default OrdersContainer;
