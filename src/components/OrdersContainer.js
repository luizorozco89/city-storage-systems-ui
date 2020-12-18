import React from 'react';
import styled from 'styled-components';
import OrderRow from './OrderRow';

const StyledOrdersTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-bottom: 1px solid rgb(212, 215, 220);
  border-spacing: 0px;
  border-collapse: collapse;
  text-align: left;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 200px;

  thead {
    border-bottom: 3px solid lightgray;
  }

  th, td {
    padding: 12px;
  }
`;

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
      <tbody>
        {orders.map((order, index) => <OrderRow key={order.id} order={order} />)}
      </tbody>
    </StyledOrdersTable>
  );
};

export default OrdersContainer;
