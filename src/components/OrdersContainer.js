import React from 'react';
import styled from 'styled-components';
import Order from './Order';

const OrdersWrapper = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 80px;
`;

const OrdersContainer = ({ orders }) => {
  return(
    <OrdersWrapper>
      {Object.values(orders).map((order, index) => <Order index={index} order={order} />)}
    </OrdersWrapper>
  );
};

export default OrdersContainer;