import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import SearchInputContainer from "../components/search-input-container/search-input-container";
import OrdersContainer from "../components/orders-container";
import { StyledApp, StyledHeader, StyledContent } from "./app.style";
import { DEV_WEBSOCKET_ENDPOINT, PROD_WEBSOCKET_ENDPOINT } from "../constants";
import { filterByPrice } from "../utils";

function App() {
  const [currentOrders, setCurrentOrders] = useState({});
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filterBy, /*setFilterBy*/] = useState('price');

  const mergeOrders = (previousState, newOrders) => {
    const vesselObj = { ...previousState };
    newOrders.forEach(order => {
      vesselObj[order.id] = order;
    });
  
    return vesselObj;
  };

  const handleFilterBy = () => {
    let filteredOrders = [];
    switch(filterBy) {
      case 'price': 
        filteredOrders = filterByPrice(searchInputValue, currentOrders);
        break;
      default:
        break;
    }
    setFilteredOrders(filteredOrders);
  };

  const handleChange = ({ target: { value } }) => {
    if (filterBy === 'price') {
      if(value.match(/^\d*\.?\d*$/)) {
        setSearchInputValue(value);
      }
    } else {
      setSearchInputValue(value);
    }
  };

  useEffect(() => {
    handleFilterBy();
  }, [searchInputValue, currentOrders]);

  useEffect(() => {
    const webSocketEndpoint = process.env.NODE_ENV === 'production' ?
      PROD_WEBSOCKET_ENDPOINT :
      DEV_WEBSOCKET_ENDPOINT;
    const socket = socketIOClient(webSocketEndpoint);
    socket.on('order_event', data => {
      setCurrentOrders(previousState => {
        const mergedOrders = mergeOrders(previousState, data);
        return mergedOrders;
      });
    });
  }, []);

  const orders = searchInputValue !== '' ? filteredOrders : Object.values(currentOrders);

  return (
    <StyledApp data-testid="app-main-container">
      <StyledHeader>
        <h1>City Storage Systems</h1>
      </StyledHeader>
      <StyledContent>
        <h2>Orders</h2>
        <SearchInputContainer
          handleChange={handleChange}
          searchInputValue={searchInputValue}
          matchesQuantity={filteredOrders.length}
        />
        <OrdersContainer orders={orders} />
      </StyledContent>
    </StyledApp>
  );
}

export default App;
