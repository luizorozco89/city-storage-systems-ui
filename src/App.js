import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import styled from 'styled-components';
import Header from './components/Header';
import OrdersContainer from './components/OrdersContainer';

const ENDPOINT = "http://127.0.0.1:4000";

const MyStyledComponent = styled.div`
  box-sizing: border-box;
`;

function App() {
  const [orders, setOrders] = useState({});
  const [searchInputValue, setSearchInputValue] = useState('');

  const mergeOrders = newOrders => {
    const tempObj = { ...orders };

    newOrders.forEach(order => {
      tempObj[order.id] = order;
    });
  
    return tempObj;
  };

  useEffect(() => {
    console.log('executed??');
    const socket = socketIOClient(ENDPOINT);
    socket.on("order_event", data => {
      const mergedOrders = mergeOrders(data);
      setOrders(mergedOrders);
    });
  }, []);

  return (
    <MyStyledComponent>
      <Header />
      <OrdersContainer orders={orders} />
    </MyStyledComponent>
  );
}

export default App;
