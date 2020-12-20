import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import Header from '../components/header/header';
import SearchInputContainer from '../components/search-input-container/search-input-container';
import OrdersContainer from '../components/orders-container';
import StyledApp from './app.style';
import { WEBSOCKET_ENDPOINT } from '../constants';

function App() {
  const [currentOrders, setCurrentOrders] = useState({});
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const headerTitleText = 'Socket Client Demo';

  const mergeOrders = newOrders => {
    // console.log(currentOrders);
    // console.log(newOrders);
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

  const handleChange = ({ target: { value } }) => {
    if(value.match(/^\d*\.?\d*$/)) {
      setSearchInputValue(value);
    }
    return;
  };

  useEffect(() => {
    handleFilterByPrice();
  }, [searchInputValue]);

  useEffect(() => {
    handleFilterByPrice();
  }, [currentOrders]);

  useEffect(() => {
    const socket = socketIOClient(WEBSOCKET_ENDPOINT);
    socket.on("order_event", data => {
      const mergedOrders = mergeOrders(data);
      setCurrentOrders(mergedOrders);
    });
  }, []);

  const orders = searchInputValue !== '' ? filteredOrders : Object.values(currentOrders);

  return (
    <StyledApp data-testid="app-main-container">
      <Header titleText={headerTitleText} />
      <SearchInputContainer handleChange={handleChange} searchInputValue={searchInputValue} matchesQuantity={filteredOrders.length} />
      <OrdersContainer orders={orders} />
    </StyledApp>
  );
}

export default App;
