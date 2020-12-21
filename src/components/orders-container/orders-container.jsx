import React from "react";
import { arrayOf, shape, string, number } from "prop-types";

import OrderRow from "../order-row";
import StyledOrdersContainer from "./orders-container.style";
import { ORDER_KEY_LABEL_MAP } from "../../constants";

const OrdersContainer = ({ orders }) => {
  return(
    <StyledOrdersContainer>
      <table>
        <thead>
          <tr>
            <th>{ORDER_KEY_LABEL_MAP['customer']}</th>
            <th>{ORDER_KEY_LABEL_MAP['destination']}</th>
            <th>{ORDER_KEY_LABEL_MAP['item']}</th>
            <th>{ORDER_KEY_LABEL_MAP['event_name']}</th>
            <th>{ORDER_KEY_LABEL_MAP['price']}</th>
          </tr>
        </thead>
        <tbody data-testid="orders-table-body">
          {orders.map((order) => <OrderRow key={order.id} order={order} />)}
        </tbody>
      </table>
    </StyledOrdersContainer>
  );
};

OrdersContainer.propTypes = {
  orders: arrayOf(shape({
    id: string,
    customer: string,
    destination: string,
    item: string,
    event_name: string,
    price: number
  }))
};

OrdersContainer.defaultProps = {
  orders: []
};

export default OrdersContainer;
