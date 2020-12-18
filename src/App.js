import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import styled from 'styled-components';
import Header from './components/Header';
import SearchInputContainer from './components/SearchInputContainer';
import OrdersContainer from './components/OrdersContainer';

const ENDPOINT = "http://127.0.0.1:4000";

const MyStyledComponent = styled.div`
  box-sizing: border-box;
`;

function App() {
  const [currentOrders, setCurrentOrders] = useState({});
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const mergeOrders = newOrders => {
    const vesselObj = { ...currentOrders };
    newOrders.forEach(order => {
      vesselObj[order.id] = order;
    });
  
    return vesselObj;
  };

  const handleFilterByPrice = () => {
    const priceToFilter = parseInt((parseFloat(searchInputValue) * 100).toFixed(0));
    const filteredOrders = Object.values(currentOrders).filter(order => order.price === priceToFilter);
    setFilteredOrders(filteredOrders);
  };

  const handleChange = e => {
    setSearchInputValue(e.target.value);
  };

  useEffect(() => {
    handleFilterByPrice();
  }, [searchInputValue]);

  useEffect(() => {
    document.body.style = 'background: #f5f4f0;';
    const socket = socketIOClient(ENDPOINT);
    socket.on("order_event", data => {
      const mergedOrders = mergeOrders(data);
      setCurrentOrders(mergedOrders);
      handleFilterByPrice();
    });
  }, []);

  const orders = searchInputValue !== '' ? filteredOrders : Object.values(currentOrders);

  return (
    <MyStyledComponent>
      <Header />
      <SearchInputContainer handleChange={handleChange} searchInputValue={searchInputValue} matchesQuantity={filteredOrders.length} />
      <OrdersContainer orders={orders} />
    </MyStyledComponent>
  );
}

export default App;
