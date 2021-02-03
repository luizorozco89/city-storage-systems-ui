import React from "react";
import { shape, string, number } from "prop-types";

import StyledOrderRow from "./order-row.style";
import { ORDER_KEY_LABEL_MAP } from "../../constants";
import { centsToDollars } from "../../utils";

const OrderRow = ({ order }) => {
  const { id, customer, destination, item, event_name, price } = order || {};

  return(
    <StyledOrderRow className="order-row" data-testid={`order-row-${id}`}>
      <td>
        <label>{ORDER_KEY_LABEL_MAP['customer']}:</label>
        {customer}
      </td>
      <td>
        <label>{ORDER_KEY_LABEL_MAP['destination']}:</label>
        {destination}
      </td>
      <td>
        <label>{ORDER_KEY_LABEL_MAP['item']}:</label>
        {item}
      </td>
      <td>
        <label>{ORDER_KEY_LABEL_MAP['event_name']}:</label>
        {event_name}
      </td>
      <td className="price">
        <label>{ORDER_KEY_LABEL_MAP['price']}:</label>
        ${centsToDollars(price)}
      </td>
    </StyledOrderRow>
  );
}

OrderRow.propTypes = {
  order: shape({
    id: string.isRequired,
    customer: string.isRequired,
    destination: string.isRequired,
    item: string.isRequired,
    event_name: string.isRequired,
    price: number.isRequired
  })
};

OrderRow.defaultProps = {
  order: {}
};

export default OrderRow;
