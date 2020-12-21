import { render } from "@testing-library/react";
import OrdersContainer from "./orders-container";

describe('orders container', () => {
  const defaultProps = {
    orders: [
      {
        id: '1',
        customer: 'Luis',
        destination: 'Luis dish destination',
        item: 'Ramen',
        event_name: 'CREATED',
        price: 2000
      },
      {
        id: '2',
        customer: 'John',
        destination: 'John dish destination',
        item: 'Sushi',
        event_name: 'COOKED',
        price: 3050
      },
      {
        id: '3',
        customer: 'David',
        destination: 'David dish destination',
        item: 'Pizza',
        event_name: 'DELIVERED',
        price: 1250
      }
    ]
  }

  const mount = props => render(<OrdersContainer {...defaultProps} {...props} />);

  it('table body with 5 rows', () => {
    const { getByTestId } = mount();
    const ordersTableBody = getByTestId('orders-table-body');
    const rowsQuantity = ordersTableBody.getElementsByTagName('tr');
    expect(rowsQuantity.length).toEqual(3);
  });

  it('table body with no rows', () => {
    const { getByTestId } = mount({orders: []});
    const ordersTableBody = getByTestId('orders-table-body');
    const rowsQuantity = ordersTableBody.getElementsByTagName('tr');
    expect(rowsQuantity.length).toEqual(0);
  });
});
